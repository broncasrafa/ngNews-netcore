using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace ngNews.Entity
{
    public class Article
    {
        [JsonProperty(PropertyName = "source")]
        public Source Source { get; set; }

        [JsonProperty(PropertyName = "author")]
        public string Author { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }

        [JsonProperty(PropertyName = "urltoimage")]
        public string UrlToImage { get; set; }

        [JsonProperty(PropertyName = "publishedAt")]
        public DateTime PublishedAt { get; set; }
    }

    public class ArticleData
    {
        [JsonProperty(PropertyName = "status")]
        public string Status { get; set; }

        [JsonProperty(PropertyName = "totalResults")]
        public int TotalResults { get; set; }

        [JsonProperty(PropertyName = "articles")]
        public List<Article> Articles { get; set; }

        public PageInfo PageInfo { get; set; }
        public Error Error { get; set; }
    }
}
