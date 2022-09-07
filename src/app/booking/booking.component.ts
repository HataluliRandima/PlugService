import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  form!: FormGroup;
  
  submitted = false;

  constructor(private http : HttpClient,private authService : AuthService,private formBuilder: FormBuilder) { }
  locationname="string";
  typelo  ="NAN";
  typeme ='';
  merchname='';

 mercs : any;

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
     
        location: ['', [Validators.required]],
        area: [
          '',
          [
            Validators.required,
            
          ]
        ]
      },
      
    );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  Searchcity()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  
    console.log(JSON.stringify(this.form.value, null, 2));

    let data = {
       "merchAddress": this.form.value.location,
      
    }
    let data1 = {
      "merchType": this.form.value.area
    }

    this.authService.searchmerchant(this.form.value.location,this.form.value.area).subscribe(
      (res : any) =>{
        console.log("Results :",res);
         this.mercs = res;
      }, (error : any) => {
        console.log(error.error);
      }
    )
  
   //  return this.http.get('https://localhost:7096/api/Merchants/MerchantsLocation?location='+this.locationname+'type='+this.typelo )
  //  .subscribe(
    //  (res : any) =>{
      //  console.log("Results :",res);
    //     this.mercs = res;
   //   }, (error : any) => {
   //     console.log(error.error);
    //  }
  //  )
  }

  

}
