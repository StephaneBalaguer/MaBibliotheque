import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nomdugens : string;
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.nomdugens = user.email;
          this.isAuth = true;
        } else {
          this.nomdugens = null;
          this.isAuth = false;
        }
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();
  }

}
