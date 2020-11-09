import { AngularFireAuth } from '@angular/fire/auth';
import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  isUserSignedIn: boolean;
  isUserSignedUp: boolean;
  constructor(private authentication: AngularFireAuth, private router: Router) {}
  ngOnInit(): void {
  }

  singUpUser(email: string, password: string) {
    this.authentication.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.isUserSignedUp = true;
    });
  }

  signInUser(email: string, password: string) {
    this.authentication.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.isUserSignedIn = true;
    });
  }
  logOut() {
     this.authentication.auth.signOut().catch(err => err);
     this.isUserSignedIn = false;
  }
  navigateAwayFromSignIn() {
    this.router.navigateByUrl('/').catch(err => err);
  }
  navigateAwayFromRecipes() {
    this.router.navigateByUrl('/signIn').catch(err => err);
  }
}




