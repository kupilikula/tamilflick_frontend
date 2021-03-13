import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { LoginComponent} from '../login/login.component';
import { SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginDialog: MatDialog, public signupDialog: MatDialog) { }

  ngOnInit(): void {
  }

  showLogin(): void {
  	let loginDialogRef = this.loginDialog.open(LoginComponent, { width: '250px', position : {top: '60px', right: '60px'} });
  }

  showSignup(): void {
	let signupDialogRef = this.signupDialog.open(SignupComponent, { width: '250px', position : {top: '60px', right: '60px'} });
  }


}
