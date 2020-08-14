import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-items-por-pagina',
  templateUrl: './items-por-pagina.component.html',
  styleUrls: ['./items-por-pagina.component.css']
})
export class ItemsPorPaginaComponent implements OnInit {

  @Output() exibir = new EventEmitter();
  @ViewChild('itemSelecionado', { static: false }) valor: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  exibirItemsPorPagina() {
    this.exibir.emit(this.valor.nativeElement.value);
  }
}
