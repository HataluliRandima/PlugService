import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  userLogin (data: any)
  {
    return this.http.post(`${environment.apiUrl}/Users/clientlogin`,data);
  }
 
  userRegister(data: any)
  {
    return this.http.post(`${environment.apiUrl}/Users/clientregister`,data);
  }

  currentuser()
  {
     return this.http.get(`${environment.apiUrl}/Users/users/current`);
  }
 
  userinfo(code :any)
  {
     return this.http.get(`${environment.apiUrl}/Users/users/`+code);
  }
 
  editinfo(code : any,data : any)
  {
     return this.http.put(`${environment.apiUrl}/Users/edituser/`+code,data);
  }

  searchmerchant(data:any,now :any)
  {
    return this.http.get(`${environment.apiUrl}/Merchants/MerchantsLocation?location=`+data+`&type=`+now);
    //https://localhost:7096/api/Merchants/MerchantsLocation?location=nn&type=hh
  }

  addbooking (data:any)
  {
    return this.http.post(`${environment.apiUrl}/Bookings/addbookings`,data);
  }

   getmerch(code:any)
   {
      return this.http.get(`${environment.apiUrl}/Merchants/merchby/`+code);
   }

  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  upload(data:any)
  {
      return this.http.post(`${environment.apiUrl}/Files/merchantupload`,data);
  }

  IsLogged() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem("token") || '';
  }
}
