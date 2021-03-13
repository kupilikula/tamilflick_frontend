import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

  interface User {
  	email: string;
  	password: string;
  }


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User = { "email" : "", "password" : "" };
  public retypepassword: string;

  constructor(public signupDialogRef: MatDialogRef<SignupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
  	this.signupDialogRef.close();
  }

  signup(): void {
  	
  }
  ngOnInit(): void {
  }

}
