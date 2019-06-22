import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-configure-website',
  templateUrl: './configure-website.component.html',
  styleUrls: ['./configure-website.component.css']
})
export class ConfigureWebsiteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) {
      
     }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data)
  }

  close(){
    this.dialogRef.close();
  }

}
