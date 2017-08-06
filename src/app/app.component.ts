import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth, AngularFireDatabase]
})
export class AppComponent implements OnInit {
  txtEmail: string;
  txtPassword: string;
  user: Observable<firebase.User>;
  name: String = 'Nguyen Van Pho';
  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {}
  signUp() {
    this.auth.auth.createUserWithEmailAndPassword(this.txtEmail, this.txtPassword)
    .catch(err => alert(err.toString()));
  }

  ngOnInit(): void {
    this.items = this.db.list('/message');
    this.user = this.auth.authState;
  }
}
