import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin (data: any)
  {
    return this.http.post(`${environment.apiUrl}/Users/login`,data);
  }
 
  userRegister(data: any)
  {
    return this.http.post(`${environment.apiUrl}/Users/register`,data);
  }
}
