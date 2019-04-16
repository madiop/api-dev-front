import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
    loginForm: FormGroup;
    error: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.loginForm = formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    onSubmit() {
        this.authenticationService
            .authenticate(this.loginForm.value)
            .subscribe(
                data => {
                    // console.log(data['user']);
                  localStorage.setItem('id_token', data['token']);
                  localStorage.setItem('currentUser', JSON.stringify(data['user']));
                  this.authenticationService.emitCurrentState();
                  this.router.navigate(['home']);
                },
                error => {
                  this.error = "Nom d'utilisateur ou mot de passe incorrect";
                //   console.log('Error ' + error.message);
                }
            );
    }
    logout() {
        this.authenticationService.logout();
    }
}
