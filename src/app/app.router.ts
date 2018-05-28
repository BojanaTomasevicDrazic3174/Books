import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import RegisterComponent from './pages/register/register.component';
import LoginComponent from './pages/login/login.component';
import AddAutorComponent from './pages/addautor/addautor.component';
import AutorComponent from './pages/autor/autor.component';
import AddBookComponent from './pages/addbook/addbook.component';
import BookComponent from './pages/book/book.component';
import PorudzbineComponent from './pages/porudzbine/porudzbine.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addautor', component: AddAutorComponent },
  { path: 'autor', component: AutorComponent },
  { path: 'addbook', component: AddBookComponent},
  { path: 'book', component: BookComponent },
  { path: 'porudzbine', component: PorudzbineComponent },

  
];
