// PorudzbinaComponent
import { Component } from '@angular/core';
import 'rxjs/Rx';
import Book from '../../model/book';
import { Router } from '@angular/router';
import GetPorudzbinaService from '../../services/getPorudzbina.service';
import DeletePorudzbinaService from '../../services/deletePorudzbina.service';

@Component({
  selector: 'porudzbine',
  templateUrl: `./porudzbine.html`,
})

export default class PorudzbinaComponent {
porudzbine: any = [{}];

  constructor(private router: Router,
    private getPorudzbinaService: GetPorudzbinaService,
    private deletePorudzbinaService: DeletePorudzbinaService) {
    let $: any;
    this.getPorudzbinaService.getPorudzbine().subscribe(data => {
      console.log(data);
      this.porudzbine = data;
      setInterval(function () {
        $ = window['jQuery'];
        $('table').DataTable();
      }.bind(this), 400);
    });
  }

  obrisiPoridzbinu(porudzbina: any) {
    // console.log(porudzbina);

    let obrisati = {
      ID: porudzbina.ID,
      //KNJIGA_ID: porudzbina.KNJIGA_ID

    };
    this.deletePorudzbinaService.callService(obrisati).subscribe(res => {
      console.log(res);
      if (res['success'] && res['success'] === 'ok') {
        let index = this.porudzbine.indexOf(porudzbina);
        if (index > -1) {
          this.porudzbine.splice(index, 1);
        }
        alert('Uspesno ste obrisali porucenu knigu');
      }
    });

  }


}
