import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

 

  constructor(private formBuilder: FormBuilder,private router : Router,private authService : AuthService,   private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
     
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      },
      
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  
    console.log(JSON.stringify(this.form.value, null, 2));
    let data = {
        "userEmail": this.form.value.email,
       "userPassword": this.form.value.password
    }
    this.authService.userLogin(data).subscribe((res : any) => {
      console.log("Results :",res);
      this.router.navigateByUrl('home')
   //this.router.navigate(['../home'] ,{ relativeTo: this.route });
    }, (error : any) => {
      console.log(error.error);
    }
    )

   
}
helo()
{
  
}

loginhandle()
{
 
}
}
