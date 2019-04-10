import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './users/authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './services/auth-guard.service';
import { RegistrationComponent } from './users/registration/registration.component';
import { ContactUsComponent } from './site/contact-us/contact-us.component';

const routes: Routes = [
  {
      path: '',
      component: HomepageComponent
  },
  {
      path: 'registration',
      component: RegistrationComponent
  },
  {
      path: 'login',
      component: AuthenticationComponent
  },
  {
      path: 'contact-us',
      component: ContactUsComponent
  },
  {
      path: 'post',
      component: PostComponent,
      canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }