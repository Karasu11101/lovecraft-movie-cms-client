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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent },
    { path: 'newMovie', component: NewMovieComponent },
    { path: '', component: MoviesListComponent, pathMatch: 'full' }
  ]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'signIn', component: LoginComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
