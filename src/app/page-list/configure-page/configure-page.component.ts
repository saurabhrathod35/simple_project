import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-configure-page',
  templateUrl: './configure-page.component.html',
  styleUrls: ['./configure-page.component.css']
})
export class ConfigurePageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.data)
  }

  close(){
    this.dialogRef.close();
  }

}
