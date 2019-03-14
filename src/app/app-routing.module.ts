import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
      path: '',
      component: HomepageComponent
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
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }