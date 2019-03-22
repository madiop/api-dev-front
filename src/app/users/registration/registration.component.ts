import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  response: string = '';
  error: string = '';
  message : string = '';
  
  constructor(
      private formBuilder: FormBuilder,
      private registrationService: RegistrationService,
      private router: Router
  ) {
      this.registrationForm = formBuilder.group({
          'firstname': ['', Validators.required],
          'lastname': ['', Validators.required],
          'email': ['', [Validators.email, Validators.required]],
          'username': ['', Validators.required],
          'password': ['', Validators.required]
      });
  }

  onSubmit() {
    // console.log(this.registrationForm.value);
      this.registrationService
          .register(this.registrationForm.value)
          .subscribe(
              data => {
                  this.message = data.content;
                  this.response = data.response
              },
              error => {
                //   console.log(error);
                this.error = 'Une erreur est survenu lors de l\'enregistrement de l\'utilisateur';
              }
          );
  }
}
