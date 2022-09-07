import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

//import { JwtModule } from '@auth0/angular-jwt';
//import  { JwtModule } from '@avatsaev/angular-jwt';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ConfrimComponent } from './confrim/confrim.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@avatsaev/angular-jwt';
import { ProfilestaffComponent } from './profilestaff/profilestaff.component';
import { BookdateComponent } from './bookdate/bookdate.component';
import { TrackbookComponent } from './trackbook/trackbook.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FiledownloadComponent } from './filedownload/filedownload.component';
//import { JwtModule } from '@auth0/angular-jwt/lib/angular-jwt.module';
//import { JwtModule } from '@avatsaev/angular-jwt';
//import { SighinComponent} from './sighin/sighin.component';
 

export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    ContactComponent,
   LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyprofileComponent,
    ConfrimComponent,
    ProfilestaffComponent,
    BookdateComponent,
    TrackbookComponent,
    FileuploadComponent,
    FiledownloadComponent,
   // SighinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config:  {
      tokenGetter: tokenGetter,
      whitelistedDomains: ["localhost:7056"],
      blacklistedRoutes: [""]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
