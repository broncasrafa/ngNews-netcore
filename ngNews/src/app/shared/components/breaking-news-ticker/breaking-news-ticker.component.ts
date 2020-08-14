import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from './../../services/shared.service';
import { BreakingNews } from './../../models/breaking-news.model';


@Component({
  selector: 'app-breaking-news-ticker',
  templateUrl: './breaking-news-ticker.component.html',
  styleUrls: ['./breaking-news-ticker.component.css']
})
export class BreakingNewsTickerComponent implements OnInit {

  @Input() type_ticker: string;

  noticias: BreakingNews[] = new Array();


  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    //this.carregarBreakingNews();
  }

  carregarBreakingNews() {
    this.sharedService.getBreakingNews().subscribe((data) => {
      data.Articles.forEach((item) => {
        const obj = new BreakingNews();
        obj.Title = item.Title
        obj.Source = item.Title.split('-').pop().trim()
        obj.SourceImg = this.getSourceImg(item.Source.Name)
        this.noticias.push(obj)
      });

    });
  }


  getSourceImg(sourceName: string) {
    let imgUrl = '';
    switch (sourceName) {
      case "ABC News": imgUrl += ''; break;
      case "ABC News (AU)": imgUrl += ''; break;
      case "Aftenposten": imgUrl += ''; break;
      case "Al Jazeera English": imgUrl += ''; break;
      case "ANSA.it": imgUrl += ''; break;
      case "Argaam": imgUrl += ''; break;
      case "Ars Technica": imgUrl += ''; break;
      case "Ary News": imgUrl += ''; break;
      case "Associated Press": imgUrl += ''; break;
      case "Australian Financial Review": imgUrl += ''; break;
      case "Axios": imgUrl += ''; break;
      case "BBC News": imgUrl += ''; break;
      case "BBC Sport": imgUrl += ''; break;
      case "Bild": imgUrl += ''; break;
      case "Blasting News (BR)": imgUrl += ''; break;
      case "Bleacher Report": imgUrl += ''; break;
      case "Bloomberg": imgUrl += ''; break;
      case "Breitbart News": imgUrl += ''; break;
      case "Business Insider": imgUrl += ''; break;
      case "Business Insider (UK)": imgUrl += ''; break;
      case "Buzzfeed": imgUrl += ''; break;
      case "CBC News": imgUrl += ''; break;
      case "CBS News": imgUrl += ''; break;
      case "CNN": imgUrl += ''; break;
      case "CNN Spanish": imgUrl += ''; break;
      case "Crypto Coins News": imgUrl += ''; break;
      case "Der Tagesspiegel": imgUrl += ''; break;
      case "Die Zeit": imgUrl += ''; break;
      case "El Mundo": imgUrl += ''; break;
      case "Engadget": imgUrl += ''; break;
      case "Entertainment Weekly": imgUrl += ''; break;
      case "ESPN": imgUrl += ''; break;
      case "ESPN Cric Info": imgUrl += ''; break;
      case "Financial Post": imgUrl += ''; break;
      case "Focus": imgUrl += ''; break;
      case "Football Italia": imgUrl += ''; break;
      case "Fortune": imgUrl += ''; break;
      case "FourFourTwo": imgUrl += ''; break;
      case "Fox News": imgUrl += ''; break;
      case "Fox Sports": imgUrl += ''; break;
      case "Globo": imgUrl += ''; break;
      case "Google News": imgUrl += ''; break;
      case "Google News (Argentina)": imgUrl += ''; break;
      case "Google News (Australia)": imgUrl += ''; break;
      case "Google News (Brasil)": imgUrl += ''; break;
      case "Google News (Canada)": imgUrl += ''; break;
      case "Google News (France)": imgUrl += ''; break;
      case "Google News (India)": imgUrl += ''; break;
      case "Google News (Israel)": imgUrl += ''; break;
      case "Google News (Italy)": imgUrl += ''; break;
      case "Google News (Russia)": imgUrl += ''; break;
      case "Google News (Saudi Arabia)": imgUrl += ''; break;
      case "Google News (UK)": imgUrl += ''; break;
      case "Göteborgs-Posten": imgUrl += ''; break;
      case "Gruenderszene": imgUrl += ''; break;
      case "Hacker News": imgUrl += ''; break;
      case "Handelsblatt": imgUrl += ''; break;
      case "IGN": imgUrl += ''; break;
      case "Il Sole 24 Ore": imgUrl += ''; break;
      case "Independent": imgUrl += ''; break;
      case "Infobae": imgUrl += ''; break;
      case "InfoMoney": imgUrl += ''; break;
      case "La Gaceta": imgUrl += ''; break;
      case "La Nacion": imgUrl += ''; break;
      case "La Repubblica": imgUrl += ''; break;
      case "Le Monde": imgUrl += ''; break;
      case "Lenta": imgUrl += ''; break;
      case "L'equipe": imgUrl += ''; break;
      case "Les Echos": imgUrl += ''; break;
      case "Libération": imgUrl += ''; break;
      case "Marca": imgUrl += ''; break;
      case "Mashable": imgUrl += ''; break;
      case "Medical News Today": imgUrl += ''; break;
      case "MSNBC": imgUrl += ''; break;
      case "MTV News": imgUrl += ''; break;
      case "MTV News (UK)": imgUrl += ''; break;
      case "National Geographic": imgUrl += ''; break;
      case "National Review": imgUrl += ''; break;
      case "NBC News": imgUrl += ''; break;
      case "News24": imgUrl += ''; break;
      case "New Scientist": imgUrl += ''; break;
      case "News.com.au": imgUrl += ''; break;
      case "Newsweek": imgUrl += ''; break;
      case "New York Magazine": imgUrl += ''; break;
      case "Next Big Future": imgUrl += ''; break;
      case "NFL News": imgUrl += ''; break;
      case "NHL News": imgUrl += ''; break;
      case "NRK": imgUrl += ''; break;
      case "Politico": imgUrl += ''; break;
      case "Polygon": imgUrl += ''; break;
      case "RBC": imgUrl += ''; break;
      case "Recode": imgUrl += ''; break;
      case "Reddit /r/all": imgUrl += ''; break;
      case "Reuters": imgUrl += ''; break;
      case "RT": imgUrl += ''; break;
      case "RTE": imgUrl += ''; break;
      case "RTL Nieuws": imgUrl += ''; break;
      case "SABQ": imgUrl += ''; break;
      case "Spiegel Online": imgUrl += ''; break;
      case "Svenska Dagbladet": imgUrl += ''; break;
      case "T3n": imgUrl += ''; break;
      case "TalkSport": imgUrl += ''; break;
      case "TechCrunch": imgUrl += ''; break;
      case "TechCrunch (CN)": imgUrl += ''; break;
      case "TechRadar": imgUrl += ''; break;
      case "The American Conservative": imgUrl += ''; break;
      case "The Globe And Mail": imgUrl += ''; break;
      case "The Hill": imgUrl += ''; break;
      case "The Hindu": imgUrl += ''; break;
      case "The Huffington Post": imgUrl += ''; break;
      case "The Irish Times": imgUrl += ''; break;
      case "The Jerusalem Post": imgUrl += ''; break;
      case "The Lad Bible": imgUrl += ''; break;
      case "The Next Web": imgUrl += ''; break;
      case "The Sport Bible": imgUrl += ''; break;
      case "The Times of India": imgUrl += ''; break;
      case "The Verge": imgUrl += ''; break;
      case "The Wall Street Journal": imgUrl += ''; break;
      case "The Washington Post": imgUrl += ''; break;
      case "The Washington Times": imgUrl += ''; break;
      case "Time": imgUrl += ''; break;
      case "USA Today": imgUrl += ''; break;
      case "Vice News": imgUrl += ''; break;
      case "Wired": imgUrl += ''; break;
      case "Wired.de": imgUrl += ''; break;
      case "Wirtschafts Woche": imgUrl += ''; break;
      case "Xinhua Net": imgUrl += ''; break;
      case "Ynet": imgUrl += ''; break;
      default:
        imgUrl += ''; break;
    }

    return imgUrl;
  }
}
