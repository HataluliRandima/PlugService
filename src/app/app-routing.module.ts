import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ConfrimComponent } from './confrim/confrim.component';
import { TrackbookingComponent } from './trackbooking/trackbooking.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfilestaffComponent } from './profilestaff/profilestaff.component';
import { BookdateComponent } from './bookdate/bookdate.component';
import { TrackbookComponent } from './trackbook/trackbook.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FiledownloadComponent } from './filedownload/filedownload.component';

const routes: Routes = [
  { path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  { path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  //{ path: 'profilestaff', component:ProfilestaffComponent,children :[
   // { path : 'profile', component:ProfileComponent},
 //   { path : 'profile/edit/:id', component:MyprofileComponent}
 // ] ,canActivate: [AuthGuard]},
 { path : 'booking/single/:id', component:ProfilestaffComponent},
{ path : 'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  { path : 'booking', component:BookingComponent},
  { path : 'contact', component:ContactComponent},
{ path : 'profile/edit/:id', component:MyprofileComponent},
   { path : 'confirm', component:ConfrimComponent},
   {path: 'track',component:TrackbookingComponent},
   {path: 'date',component:BookdateComponent},
   {path: 'trackbook',component:TrackbookComponent},
   {path: 'upload',component:FileuploadComponent},
   {path:'download', component:FiledownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
