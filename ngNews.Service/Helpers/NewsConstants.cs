namespace ngNews.Service.Helpers
{
    public static class NewsConstants
    {
        private const string ApiKey = "ec0c09b121044b8c890addd6ed6dec3b";
        public const string BaseUrl = "https://newsapi.org";
        public const string TopHeadlinesUrl = BaseUrl + "/v2/top-headlines?apiKey=" + ApiKey;
        public const string EverythingUrl = BaseUrl + "/v2/everything?apiKey=" + ApiKey;
        public const string SourcesUrl = BaseUrl + "/v2/sources?apiKey=" + ApiKey;
    }
}
