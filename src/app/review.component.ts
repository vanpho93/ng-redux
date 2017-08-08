import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase';

@Component({
    templateUrl: './review.component.html',
    selector: 'app-review'
})

export class ReviewComponent implements OnInit {
    user: Observable<User>;
    txtEmail: string;
    txtPassword: string;
    constructor(
        private fbDatabase: AngularFireDatabase,
        private fbAuth: AngularFireAuth
    ) {}

    ngOnInit() {
        this.user = this.fbAuth.authState;
        this.user.subscribe(authState => {
            console.log('Changed');
        });
    }

    signUp() {
        const { txtEmail, txtPassword } = this;
        this.fbAuth.auth.createUserWithEmailAndPassword(txtEmail, txtPassword)
        .catch(err => alert(err.message));
    }

    signIn() {
        const { txtEmail, txtPassword } = this;
        this.fbAuth.auth.signInWithEmailAndPassword(txtEmail, txtPassword)
        .catch(err => alert(err.message));
    }
}
