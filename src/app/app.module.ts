import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './services/books.service';
import { EditBookComponent } from './book-list/edit-book/edit-book.component';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },

  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: 'books/edit/:id', canActivate: [AuthGuardService], component: EditBookComponent },
  { path: 'accueil', component: AccueilComponent },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '*', redirectTo: 'accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    EditBookComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
