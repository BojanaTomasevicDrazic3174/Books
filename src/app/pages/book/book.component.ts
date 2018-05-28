// BookComponent
import { Component } from '@angular/core';
import 'rxjs/Rx';
import Book from '../../model/book';
import GetBookService from '../../services/getbook.service';
import AddPorudzbinaService from '../../services/addPorudzbina.service';
import CheckUserService from '../../services/checkUser.service';
import DeleteBookService from '../../services/deleteBook.service';
import Porudzbina from '../../model/porudzbina';
import { Router } from '@angular/router';
@Component({
  selector: 'book',
  templateUrl: `./book.html`,
})

export default class BookComponent {
 selectedBookId: string;
  books: Book[];
  addPorudzbina: Porudzbina;
  username: string = 'korisnik';

  constructor(private router: Router,
     private getBookService: GetBookService,
      private addPorudzbinaService: AddPorudzbinaService,
    private checkUserService: CheckUserService,
    private deleteBookService: DeleteBookService) {
    
      if(localStorage.getItem('token') != null ) {
        checkUserService.callService({token: localStorage.getItem('token')}).subscribe((res:any) => {
          if(res === 'ok') {
            this.username = 'admin';
          }else {
            this.username = 'korisnik';
          }
          console.log(this.username);
          
        });
      }
    this.getBookService.getBooks().subscribe(data => {
      // console.log(data);
      this.books = data;
    /*   setInterval(function () {
        $ = window['jQuery'];
        $('table').DataTable();
      }.bind(this), 400); */
    });
  }

  odaberiKnjigu(bo: any) {
   // console.log(bo);
   this.selectedBookId = bo;
    
  }

  naruciKnjigu() {
    console.log(this.selectedBookId);

    this.addPorudzbina = new Porudzbina();
    this.addPorudzbina.KNJIGA_ID = parseInt(this.selectedBookId);
    this.addPorudzbinaService.callService(this.addPorudzbina).subscribe(res => {
      if (res['success'] && res['success'] === 'ok') {
        this.addPorudzbina = null;
        this.selectedBookId = null;
        alert('Uspesno ste narucili knjigu');
      }
    });
    this.router.navigate(['/porudzbine']);

    
  }
  deleteKnjiga(book: any) {
   // console.log(book);
    const obrisati = {
      'ID': book.ID
    }
// console.log(obrisati);

this.deleteBookService.callService(obrisati).subscribe(res => {
  if (res['success'] && res['success'] === 'Deleted successfully') {
    let index = this.books.indexOf(book);
    if (index > -1 ) {
      this.books.splice(index, 1);
    }
    alert('Uspesno ste obrisali knjigu');
  }
});

  }
}
