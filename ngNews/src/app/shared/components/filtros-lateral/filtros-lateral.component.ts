import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filtro, FiltrosUtilizados } from '../../models/filtros.model';

@Component({
  selector: 'app-filtros-lateral',
  templateUrl: './filtros-lateral.component.html',
  styleUrls: ['./filtros-lateral.component.css']
})
export class FiltrosLateralComponent implements OnInit {

  @Input() filtros: Filtro;
  @Input() titulo: string;
  @Input() tipo: string;
  @Input() mostrarBarraPesquisa: boolean;
  @Output() filtrar = new EventEmitter();

  filtroData: FiltrosUtilizados = new FiltrosUtilizados();

  constructor() { }

  ngOnInit() {
  }

  filterData() {
    this.filtrar.emit(this.filtroData);
  }
}
