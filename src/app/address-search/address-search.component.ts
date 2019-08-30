import { Component, OnInit } from '@angular/core';
import { RestServise } from '../rest.service';
import { stringify } from 'querystring';
import { $ } from 'protractor';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent implements OnInit {

  url: string = 'https://viacep.com.br/ws/'


  estado: string = '';
  cidade: string = '';
  rua: string = '';
  fimUrl: string = '/json/';
  urlFinal: string = '';
  objEndereco: any = [];

  constructor(public rest: RestServise) { }

  ngOnInit() { }

  buscaEndereco() {
    this.urlFinal = this.url + this.estado + '/' + this.cidade + '/' + this.rua + this.fimUrl;
    this.rest.getObject(this.urlFinal).subscribe((data: {}) => {
      this.objEndereco = data;
    })
  }
}
