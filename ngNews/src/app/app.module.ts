import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
// import { DateTimePickerModule } from 'ngx-datetime-picker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FontesNoticiasComponent } from './fontes-noticias/fontes-noticias.component';
import { HomeComponent } from './home/home.component';

import { FonteNoticiaService } from './fontes-noticias/fontes-noticias.service';
import { FonteNoticiasListaComponent } from './fontes-noticias/fonte-noticias-lista/fonte-noticias-lista.component';
import { GeralComponent } from './geral/geral.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    FontesNoticiasComponent,
    HomeComponent,
    FonteNoticiasListaComponent,
    GeralComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    FonteNoticiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
