import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';

@Component({
  selector: 'app-confrim',
  templateUrl: './confrim.component.html',
  styleUrls: ['./confrim.component.css']
})
export class ConfrimComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }

  ngOnInit(): void {
  }

}
