import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './users/authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { PostRepository } from './services/post-repository.service';
import { TokenInterceptor } from './users/authentication/token.interceptor';
import { RegistrationComponent } from './users/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticationComponent,
    PostComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    AuthenticationService,
    PostRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
