import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginData } from './interfaces/login-data.interface';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login({ email, password }: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.auth.signInWithPopup(provider)    ;
  }

  register({ email, password }: LoginData) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}
