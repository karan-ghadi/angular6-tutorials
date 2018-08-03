import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loaderFeature = 'recipe';
  onNavigate(feature: string) {
    this.loaderFeature = feature;
  }

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyCU5vsY5xkFO9Hd66wv2pykVzYOUuHxdoQ',
    //   authDomain: 'ngrecipebook-25f52.firebaseapp.com'
    // });
  }
}
