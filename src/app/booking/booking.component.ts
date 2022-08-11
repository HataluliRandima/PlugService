import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private http : HttpClient) { }
  locationname="";
  typelo="";
  typeme ='';
  merchname='';

 mercs : any;

  ngOnInit(): void {
  }

  Searchcity()
  {
    return this.http.get('https://localhost:7052/api/Users/MerchantsLocation?location='+this.locationname+'&type='+this.typelo )
    .subscribe(
      (res : any) =>{
        console.log("Results :",res);
         this.mercs = res;
      }, (error : any) => {
        console.log(error.error);
      }
    )
  }

}
