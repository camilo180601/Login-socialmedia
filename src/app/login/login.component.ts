import { Component } from '@angular/core';
import Global from '../services/Global';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public user: User;
    public state: string = '';

    constructor(
        private _route: Router
    ) {
        this.user = new User()
        this.state
    }

    onSubmit() {
        fetch(Global.url + 'user/login', {
            method: "POST",
            body: JSON.stringify(this.user),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            const { status, token, user } = data
            localStorage.setItem('tokenAuth', token)
            localStorage.setItem('userLogged', JSON.stringify(user))
            this.state = status
        })

    }
}
