import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private angularFireAuth: AngularFireAuth, private route: Router) { }

  signUpUser(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(success => {
      console.log(success);
      this.route.navigate(['/login']);
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  signInUser(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(success => {
      this.route.navigate(['/']);
      this.angularFireAuth.auth.currentUser.getIdToken().then((token: string) => this.token = token);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getToken() {
    this.angularFireAuth.auth.currentUser.getIdToken().then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.token = null;
  }
}
