import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailComponent } from './components/movies/detail/detail.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ButtonShadowDirective } from './directives/button-shadow.directive';
import { WhiteShadowBoxDirective } from './directives/white-shadow-box.directive';
import { NewMovieComponent } from './components/movies/new-movie/new-movie.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationModalComponent } from './shared/registration-modal/registration-modal.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BooksComponent } from './components/books/books.component';
import { NewBookComponent } from './components/books/new-book/new-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    NotfoundComponent,
    HomeComponent,
    MovieCardComponent,
    MoviesComponent,
    DetailComponent,
    MoviesListComponent,
    RegistrationComponent,
    ButtonShadowDirective,
    WhiteShadowBoxDirective,
    NewMovieComponent,
    LoginComponent,
    RegistrationModalComponent,
    ProfileComponent,
    ContactsComponent,
    BooksComponent,
    NewBookComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    PaginatorModule,
    HttpClientModule,
    CKEditorModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
