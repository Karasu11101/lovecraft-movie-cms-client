import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailComponent } from './components/movies/detail/detail.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewMovieComponent } from './components/movies/new-movie/new-movie.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { BooksComponent } from './components/books/books.component';
import { BookDetailComponent } from './components/books/detail/book-detail.component';
import { NewBookComponent } from './components/books/new-book/new-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent },
    { path: 'newMovie', component: NewMovieComponent },
    { path: '', component: MoviesListComponent, pathMatch: 'full' }
  ]},
  { path: 'books', component: BooksComponent, children: [
    { path: 'detail/:title/:_id', component: BookDetailComponent },
    { path: 'newBook', component: NewBookComponent },
    { path: '', component: BooksListComponent, pathMatch: 'full'}
  ]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactUs', component: ContactsComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
