import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authenticationService: AuthService
    ){
    }

    // tslint:disable-next-line: member-ordering
    email: string;
    password: string;
ngOnInit() {


      }
      
      
    signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
   // tslint:disable-next-line: comment-format
    signIn() {//login
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }

    signOut() {
    this.authenticationService.SignOut();
    }

    }




