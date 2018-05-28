import { Component } from '@angular/core';
import 'rxjs/Rx';
import Autor from '../../model/autor';
import GetAutorService from '../../services/getAutor.service';

@Component({
  selector: 'autor',
  templateUrl: `./autor.html`,
})

export default class AutorComponent {

  autors: Autor[];

  constructor(private autorService: GetAutorService) {
    let $: any;
    this.autorService.getAutors().subscribe(data => {
      console.log(data);
      this.autors = data;
      setInterval(function () {
        $ = window['jQuery'];
        $('table').DataTable();
      }.bind(this), 400);
    });
  }


}
