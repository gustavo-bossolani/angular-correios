import { Component, OnInit, Input } from '@angular/core';
import { RestServise } from '../rest.service';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css']
})
export class CepSearchComponent implements OnInit {

  url: string = 'https://viacep.com.br/ws/';
  fimUrl: string = '/json/';
  cep: string;
  urlFinal: string = '';

  @Input('busca-cep-obj')
  objEndereco: any = [];

  constructor(public rest: RestServise) { }

  ngOnInit() {}

  buscaCEP() {
    this.urlFinal = this.url + this.cep + this.fimUrl;
    this.rest.getObject(this.urlFinal).subscribe((data: {}) => {
      this.objEndereco = data;
    });
  }

}
