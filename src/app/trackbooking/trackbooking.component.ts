import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trackbooking',
  templateUrl: './trackbooking.component.html',
  styleUrls: ['./trackbooking.component.scss']
})
export class TrackbookingComponent implements OnInit {

  constructor(private router:Router) { }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  
}
  ngOnInit(): void {
  }

}


