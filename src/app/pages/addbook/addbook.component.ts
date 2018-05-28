import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router} from '@angular/router';

//modeli 
import Book from "../../model/book";
import Autor from '../../model/autor';

// servisi
import GetAutorService from '../../services/getAutor.service';
import AddBookService from "../../services/addbook.service";
@Component({
  selector: 'addbook',
  templateUrl: `./addbook.html`
})

export default class AddBookComponent {
  autors: Autor[] = [];
  book: Book;
  addBookForm = new FormGroup({
    name: new FormControl(),
    isbn: new FormControl(),
    autor_id: new FormControl()
  });

  constructor(private http: Http, private router: Router, private addBookService: AddBookService, private getAutorService: GetAutorService) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.getAutorService.getAutors().subscribe(data => {
      this.autors = data;
      console.log(this.autors);
      if (this.autors[0]['ID']) {
        this.addBookForm.controls['autor_id'].setValue(this.autors[0]['ID']);
      }
      
    });

  }

  addBook(book: Book) {

    console.log('Bog decki');
    
    this.addBookService.callService(book).subscribe( res => {
      if( res['success'] && res['success'] === 'ok') {
        this.addBookForm.reset();
        alert('Uspesno ste dodali knjigu');
      }

    });
    this.router.navigate(['/book']);
  }

}
