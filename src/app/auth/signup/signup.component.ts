import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }


  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUpUser(email, password);

  }
}
