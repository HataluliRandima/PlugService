import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  mercs : any;

  constructor( private router: Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.currentuser().subscribe(
      (res : any) => {
        // this.message = `Welcome ${res.userName}`;
        this.mercs = res;
        console.log("Results :",res);
      } , (error : any) => {
      //   this.message = 'you are not log in';
        console.log(error.error);
      }
     )
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
  goToPagelogin(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
