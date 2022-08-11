import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
       
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        Surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact: ['',[Validators.required,Validators.minLength(10)]],
        address: ['',Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', 
        [Validators.required,
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

  onSubmit(): void {
   
  }
  reg()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    let data = {
      
      "userUsername":this.form.value.username ,
      "userSurname": this.form.value.Surname,
      "userEmail": this.form.value.email,
      "userContactdetails": this.form.value.contact ,
      "userAddress": this.form.value.address ,
      "userPassword": this.form.value.password
     
  }
    this.authService.userRegister(data).subscribe((res : any) => {
      console.log("Results :",res);
   this.router.navigateByUrl('login');
    }, (error : any) => {
      console.log(error.error);
    }
    )

  }

}
