import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeralComponent } from './geral/geral.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FontesNoticiasComponent } from './fontes-noticias/fontes-noticias.component';
import { FonteNoticiasListaComponent } from './fontes-noticias/fonte-noticias-lista/fonte-noticias-lista.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'everything', component: GeralComponent },
  { path: 'category/:category', component: CategoriasComponent },
  { path: 'sources', component: FontesNoticiasComponent },
  { path: 'sources/:source', component: FonteNoticiasListaComponent },
  { path: 'teste', component: BlankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
