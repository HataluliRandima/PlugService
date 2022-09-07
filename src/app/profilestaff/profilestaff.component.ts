import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profilestaff',
  templateUrl: './profilestaff.component.html',
  styleUrls: ['./profilestaff.component.css']
})
export class ProfilestaffComponent implements OnInit {


  //message = '';
  //EditData: any;
  Employeeid: any;
 nn :any;
  mers:any;

  constructor(private authservice : AuthService,private route: ActivatedRoute) {
    this.Employeeid = this.route.snapshot.paramMap.get('id');
    if (this.Employeeid != null && this.Employeeid != 0)
     {
      this.UpdateUser(this.Employeeid);
     }
   }

  ngOnInit(): void {
  }

  UpdateUser(code :any)
  {
     
    this.authservice.getmerch(code).subscribe((res:any) =>{
      this.mers = res;
      //this.mers = this.nn.list;
      console.log("Results :",this.mers);
     
    });
  }


}
