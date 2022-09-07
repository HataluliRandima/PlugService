import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  fileForm = new FormGroup({
    altText: new FormControl(''),
    description: new FormControl('')
  });
  constructor(private http:  HttpClient,private authService : AuthService) { }
  fileToUpload: any;
 
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  saveFileInfo()
  {
    //debugger
    const formData: FormData = new FormData();
    formData.append('MerchFile', this.fileToUpload);
    //formData.append('altText', this.fileForm.value.altText);
   // formData.append('description', this.fileForm.value.description);
   https://localhost:7056/api/Files/merchantupload
   //http://localhost:48608/FileManager
    this.authService.upload(formData).subscribe((res : any) => {
      
       
      console.log("Results :",res);
      alert("File uploaded")
   //this.router.navigate(['../home'] ,{ relativeTo: this.route });
    }, (error : any) => {
       
      console.log(error.error);
    }
    )
    
    //,
   // { headers : new HttpHeaders()})
    //.subscribe(() => alert("File uploaded"));
  }
  ngOnInit(): void {
  }

}
