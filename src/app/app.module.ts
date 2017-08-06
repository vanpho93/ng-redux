import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBeEmU61t-41704qEivDriBaniTzZMLMRk',
  authDomain: 'ng-chat-243a5.firebaseapp.com',
  databaseURL: 'https://ng-chat-243a5.firebaseio.com',
  projectId: 'ng-chat-243a5',
  storageBucket: 'ng-chat-243a5.appspot.com',
  messagingSenderId: '806532972203'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
