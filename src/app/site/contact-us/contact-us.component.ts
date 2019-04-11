import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  pageTitle: string = "Contactez nous"
  items = ['Contactez nous'];
  contactForm: FormGroup;
  response: string = '';
  error: string = '';
  message : string = '';

  constructor( private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', [Validators.email, Validators.required]],
        'subject': [''],
        'message': ['', Validators.required]
    });

  }

  ngOnInit() {}

  onSubmit() {}

}
