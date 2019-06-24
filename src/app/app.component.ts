import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MaBibliotheque';
  constructor() {
    const config = {
      apiKey: "AIzaSyB9l0m3KTdU1hKetaTvK7uVytLXLkREL8g",
      authDomain: "mabibliotheque-6145c.firebaseapp.com",
      databaseURL: "https://mabibliotheque-6145c.firebaseio.com",
      projectId: "mabibliotheque-6145c",
      storageBucket: "",
      messagingSenderId: "967486330803",
      appId: "1:967486330803:web:3538aafd05ad55a6"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

  }



}
