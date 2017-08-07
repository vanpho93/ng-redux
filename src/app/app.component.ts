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
  preload = true;
  txtPost: string;
  txtEmail: string;
  txtPassword: string;
  user: Observable<firebase.User>;
  posts: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {}
  signUp() {
    this.auth.auth.createUserWithEmailAndPassword(this.txtEmail, this.txtPassword)
    .catch(err => alert(err.message));
  }

  signIn() {
    this.auth.auth.signInWithEmailAndPassword(this.txtEmail, this.txtPassword)
    .catch(err => alert(err.message));
  }

  signOut() {
    this.auth.auth.signOut()
    .catch(err => alert(err.toString()));
  }

  addPost() {
    this.posts.push({ content: this.txtPost });
    this.txtPost = '';
  }

  remove(id: string) {
    this.posts.remove(id);
  }

  ngOnInit(): void {
    this.user = this.auth.authState;
    this.user.subscribe(authData => {
      if (this.preload) { this.preload = false; }
      if (authData.uid) {
        const uid = authData.uid;
        this.posts = this.db.list(`/${uid}/posts`);
      }
    });
  }
}
