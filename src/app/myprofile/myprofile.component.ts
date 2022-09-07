import { Component,Inject, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { DialogService } from '../services/dialog.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  saveresp: any;
  message = '';
  EditData: any;
  Employeeid: any;
  messageclass = '';

  constructor(private dialogservice : DialogService,private authservice : AuthService,private route: ActivatedRoute) {
    this.Employeeid = this.route.snapshot.paramMap.get('id');
    if (this.Employeeid != null && this.Employeeid != 0)
     {
      this.UpdateUser(this.Employeeid);
     }
   }


  UpdateUser(code :any)
  {
    this.authservice.userinfo(code).subscribe((res:any) =>{
    this.EditData = res;
    if(this.EditData != null)
    {
    this.profileForm = new FormGroup({
      userId: new FormControl(this.EditData.userId),
      userEmail: new FormControl(this.EditData.userEmail),
      userName: new FormControl(this.EditData.userName),
      userSurname: new FormControl(this.EditData.userSurname),
      userContactdetails: new FormControl(this.EditData.userContactdetails),
      userAddress: new FormControl( this.EditData.userAddress),
    });
    console.log("Results :",res);
    }

  });
  }

  profileForm = new FormGroup({
    userId: new FormControl({value:null,disabled:true}),
    userEmail: new FormControl({value:null,disabled:true}),
    userName: new FormControl('', Validators.required),
    userSurname: new FormControl('', Validators.required),
    userContactdetails: new FormControl('', Validators.required),
    userAddress: new FormControl('', Validators.required),
     
  });


  //this.profileForm.controls[userEmail].disable() 
  //userEmail = new FormControl({ value: null, disabled: true });

  
  
  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    } 

    console.log(JSON.stringify(this.profileForm.value, null, 2));

    let data = {
      
      "userName":this.profileForm.value.userName ,
      "userSurname": this.profileForm.value.userSurname,
      "userContactdetails": this.profileForm.value.userContactdetails ,
      "userAddress": this.profileForm.value.userAddress 
     
  }

  this.authservice.editinfo(this.Employeeid,data).subscribe((res : any) => {
    this.saveresp = res;
    if (this.saveresp.result == 'pass') {
      this.message = "Saved Sucessfully"
      this.messageclass = 'sucess'
     
    } else {
      this.message = "save failed"
      this.messageclass = 'error'
    }
    this.message = "Saved Sucessfully"
    console.log("Results :",res);
     
 
  }, (error : any) => {
    this.message = "Please enter valid data"
    this.messageclass = 'error'
    console.log(error.error);
  }
  )
  }


  yesNoDialog()
  {
    this.dialogservice
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
       
  }

  get userName() {
    return this.profileForm.get('userName');
  }
  get userSurname() {
    return this.profileForm.get('userSurname');
  }
  get userContactdetails() {
    return this.profileForm.get('userContactdetails');
  }
  get userAddress() {
    return this.profileForm.get('userAddress');
  }
}
