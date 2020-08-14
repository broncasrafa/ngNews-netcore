import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { DateTimePickerModule } from 'ngx-datetime-picker';

import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FiltrosLateralComponent } from './components/filtros-lateral/filtros-lateral.component';
import { ItemsPorPaginaComponent } from './components/items-por-pagina/items-por-pagina.component';
import { BreakingNewsTickerComponent } from './components/breaking-news-ticker/breaking-news-ticker.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

import { TratarImagemPipe } from './pipes/tratar-imagem.pipe';
import { LocaleDatePipe } from './pipes/locale-date.pipe';

import { SharedService } from './services/shared.service';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    MenuLateralComponent,
    CabecalhoComponent,
    FiltrosLateralComponent,
    BreakingNewsTickerComponent,
    NoticiasComponent,
    TratarImagemPipe,
    LocaleDatePipe,
    ItemsPorPaginaComponent
  ],
  exports: [
    MenuLateralComponent,
    CabecalhoComponent,
    FiltrosLateralComponent,
    BreakingNewsTickerComponent,
    NoticiasComponent,
    ItemsPorPaginaComponent,

    TratarImagemPipe,
    LocaleDatePipe
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
