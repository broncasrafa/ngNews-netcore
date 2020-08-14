import { Source } from './source.model';
import { Error } from './error.model';

export class Article {
  Source: Source;
  Author: string;
  Title: string;
  Description: string;
  Url: string;
  UrlToImage: string;
  PublishedAt: Date;
}

export class ArticleData {
  Status: string;
  TotalResults: number;
  Articles: Article[] = [];
  Error: Error;
}
