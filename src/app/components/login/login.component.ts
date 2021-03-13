import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(public loginDialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
  	this.loginDialogRef.close();
  }

  login(): void {
  	
  }

  ngOnInit(): void {
  }

}
