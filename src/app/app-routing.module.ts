import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './users/authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './services/auth-guard.service';
import { RegistrationComponent } from './users/registration/registration.component';
import { ContactUsComponent } from './site/contact-us/contact-us.component';
import { NewsComponent } from './site/news/news.component';

const routes: Routes = [
  {
      path: 'home',
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
      path: 'post',
      component: PostComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'contact-us',
      component: ContactUsComponent
  },
  {
      path: 'news',
      component: NewsComponent
  },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }