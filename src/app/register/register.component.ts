import { Component } from '@angular/core';
import Global from '../services/Global';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    public user: User;
    public state: string = '';

    constructor(
        private _route: Router
    ) {
        this.user = new User()
        this.state
    }

    onSubmit() {
        fetch(Global.url + 'user/register', {
            method: "POST",
            body: JSON.stringify(this.user),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            const { status } = data
            this.state = status
        })
    }

}
