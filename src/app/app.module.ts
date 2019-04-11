import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

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
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './site/contact-us/contact-us.component';
import { NewsComponent } from './site/news/news.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { CarouselBasicComponent } from './shared/carousel-basic/carousel-basic.component';
import { PostItemComponent } from './site/news/post-item/post-item.component';
import { PostMiscellaneousComponent } from './site/news/post-miscellaneous/post-miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticationComponent,
    PostComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    NewsComponent,
    PageHeaderComponent,
    CarouselBasicComponent,
    PostItemComponent,
    PostMiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlModule
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
