using System.Collections.Generic;
using Newtonsoft.Json;

namespace ngNews.Entity
{
    public class Source
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }

        [JsonProperty(PropertyName = "category")]
        public string Category { get; set; }

        [JsonProperty(PropertyName = "language")]
        public string Language { get; set; }

        [JsonProperty(PropertyName = "country")]
        public string Country { get; set; }
    }

    public class SourceData
    {
        [JsonProperty(PropertyName = "status")] 
        public string Status { get; set; }

        [JsonProperty(PropertyName = "sources")] 
        public List<Source> Sources { get; set; }
        public PageInfo PageInfo { get; set; }
        public Error Error { get; set; }
    }
}
