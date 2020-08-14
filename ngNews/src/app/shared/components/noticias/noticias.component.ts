import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Article, ArticleData } from '../../models/article.model';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnChanges {

  @Input() noticias: ArticleData

  img: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
   this.carregarImagens()
  }

  carregarImagens() {
    this.img = []

    if(this.noticias.TotalResults > 0) {
      this.noticias.Articles.forEach((item, i) => {
        this.img.push(`url(${item.UrlToImage})`)
      });
    }
  }
}
