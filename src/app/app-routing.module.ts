import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ConfrimComponent } from './confrim/confrim.component';
import { TrackbookingComponent } from './trackbooking/trackbooking.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path : 'profile', component:ProfileComponent},
  { path : 'booking', component:BookingComponent},
  { path : 'contact', component:ContactComponent},
  { path : 'myprofile', component:MyprofileComponent},
   { path : 'confirm', component:ConfrimComponent},
   {path: 'track',component:TrackbookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
