import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginData } from './interfaces/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login({ email, password }: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password }: LoginData) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}
