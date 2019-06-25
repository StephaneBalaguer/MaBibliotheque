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
    const firebaseConfig = {
      apiKey: "",
      authDomain: "mabibliotheque-6145c.firebaseapp.com",
      databaseURL: "https://mabibliotheque-6145c.firebaseio.com",
      projectId: "mabibliotheque-6145c",
      storageBucket: "mabibliotheque-6145c.appspot.com",
      messagingSenderId: "967486330803",
      appId: "1:967486330803:web:3538aafd05ad55a6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }



}
