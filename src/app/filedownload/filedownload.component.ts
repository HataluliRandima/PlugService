import { HttpClientXsrfModule, HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}


@Component({
  selector: 'app-filedownload',
  templateUrl: './filedownload.component.html',
  styleUrls: ['./filedownload.component.css']
})
export class FiledownloadComponent implements OnInit {

  constructor(private http:  HttpClient) {
    this.getAllFiles();
   }
  files: any = [];
  getAllFiles()
  {
     
    return this.http.get('https://localhost:7056/api/Merchants/getmerchants')
    .subscribe((result) => {
      this.files = result;
      console.log(result);
  });
  }
  downloadFile(id: number, contentType: string)
  {
    return this.http.get(`https://localhost:7056/api/Files/download/${id}`, {responseType: 'blob'})
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: contentType });
       saveAs(blob, contentType);

     // const blob = new Blob([result], { type: contentType }); // you can change the type
     // const url= window.URL.createObjectURL(blob);
     // window.open(url);
      console.log(result);
  });
  }
  ngOnInit(): void {
  }

}
