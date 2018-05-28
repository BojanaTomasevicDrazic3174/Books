import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { SearchPipe } from './pages/pipes/search';
import { HttpModule } from '@angular/http';

// komponente i servisi 
import HomeComponent from './pages/home/home.component';

import RegisterComponent from './pages/register/register.component';

import LoginComponent from './pages/login/login.component';
import AddAutorComponent from './pages/addautor/addautor.component';
import AutorComponent from './pages/autor/autor.component';
import AddBookComponent from './pages/addbook/addbook.component';
import BookComponent from './pages/book/book.component';
import PorudzbineComponent from './pages/porudzbine/porudzbine.component';

import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import CheckUserByIdService from './services/checkUserById.service';
import AddAutorService from './services/addautor.service';
import GetAutorService from './services/getAutor.service';
import AddBookService from './services/addbook.service';
import GetBookService from './services/getbook.service';
import AddPorudzbinaService from './services/addPorudzbina.service';
import CheckUserService from './services/checkUser.service';
import DeleteBookService from './services/deleteBook.service';
import GetPorudzbinaService from './services/getPorudzbina.service';
import DeletePorudzbinaService from './services/deletePorudzbina.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule],
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddAutorComponent,
    AutorComponent,
    AddBookComponent,
    BookComponent, 
    PorudzbineComponent],
  providers: [RegisterService,
    LoginService,
    AddAutorService,
    GetAutorService,
    CheckUserByIdService,
    AddBookService,
    GetBookService,
    AddPorudzbinaService,
    CheckUserService,
    DeleteBookService,
    PorudzbineComponent,
    GetPorudzbinaService,
    DeletePorudzbinaService
],
  bootstrap: [AppComponent]
})
export class AppModule {


}
