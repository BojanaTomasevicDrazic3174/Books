import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router} from '@angular/router';
import  AddAutorService  from '../../services/addautor.service';
import Autor from '../../model/autor';

@Component({
  selector: 'addautor',
  templateUrl: `./addautor.html`
})

export default class AddAutorComponent {

  addAutorForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl()

  });

  constructor( private http: Http,private router: Router, private addAutorService: AddAutorService) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  addAutor(autor: Autor) {
    this.addAutorService.callService(autor).subscribe(data => {
      this.addAutorForm.reset();
      alert('Uspesno ste dodali autora');
      this.router.navigate(['/addautor']);
    });

  }

}
