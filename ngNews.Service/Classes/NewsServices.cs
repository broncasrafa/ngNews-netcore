using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using ngNews.Service.Interfaces;
using ngNews.Service.Helpers;
using ngNews.Entity;
using Newtonsoft.Json;

namespace ngNews.Service.Classes
{
    public class NewsServices : HttpRequestProcessor, INewsServices
    {

        /// <summary>
        /// This endpoint provides live top and breaking headlines for a country, specific category in 
        /// a country, single source, or multiple sources. You can also search with keywords. 
        /// Articles are sorted by the earliest date published first.
        /// This endpoint is great for retrieving headlines for display on news tickers or similar, perfect 
        /// for use with news tickers or anywhere you want to display live up-to-date news headlines and images.
        /// </summary>
        /// <param name="parameters">        
        ///     • country: The 2-letter ISO 3166-1 code of the country you want to get headlines for. 
        ///                - Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . 
        ///                Note: you can't mix this param with the sources param.
        ///     • category: The category you want to get headlines for. 
        ///                 - Possible options: business entertainment general health science sports technology . 
        ///                Note: you can't mix this param with the sources param.
        ///     • sources: A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the sources parameter to locate these programmatically or look at the sources index. 
        ///                Note: you can't mix this param with the country or category params.
        ///     • q: Keywords or a phrase to search for.
        ///     • pageSize - int: The number of results to return per page (request). 20 is the default, 100 is the maximum.
        ///     • page - int: Use this to page through the results if the total results found is greater than the page size.
        /// </param>
        /// <returns>returns breaking news headlines for a country and category, or currently running on a single or multiple sources.</returns>
        public async Task<ArticleData> GetListTopHeadlines(List<KeyValuePair<string, object>> parameters)
        {
            try
            {
                var parametros = GetParameters(parameters);
                var uri = new Uri(NewsConstants.TopHeadlinesUrl + parametros);
                var response = await GetAsync(uri);
                var json = await response.Content.ReadAsStringAsync();
                if (response.StatusCode != HttpStatusCode.OK)
                {
                    return new ArticleData() { Status = "error", Error = UnExpectedResponse(response, json) };
                }

                var result = JsonConvert.DeserializeObject<ArticleData>(json);
                return result;
            }
            catch (Exception ex)
            {
                return new ArticleData() { Status = "error", Error = new Error() { Message = ex.Message } };
            }
        }

        /// <summary>
        /// Search through millions of articles from over 30,000 large and small news sources and blogs. 
        /// This includes breaking news as well as lesser articles.
        /// This endpoint suits article discovery and analysis, but can be used to retrieve articles 
        /// for display, too.
        /// </summary>
        /// <param name="parameters">
        /// • q: Keywords or phrases to search for.
        ///     Advanced search is supported here:
        ///     - Surround phrases with quotes (") for exact match.
        ///     - Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
        ///     - Prepend words that must not appear with a - symbol. Eg: -bitcoin
        ///     - Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
        ///     - The complete value for q must be URL-encoded.
        /// 
        /// • sources: A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
        /// 
        /// • domains: A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
        /// 
        /// • from: A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2018-08-16 or 2018-08-16T11:20:29) Default: the oldest according to your plan.
        /// 
        /// • to: A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2018-08-16 or 2018-08-16T11:20:29) Default: the newest according to your plan.
        /// 
        /// • language: The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar de en es fr he it nl no pt ru se ud zh . Default: all languages returned.
        /// 
        /// • sortBy: The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
        ///     - relevancy = articles more closely related to q come first.
        ///     - popularity = articles from popular sources and publishers come first.
        ///     - publishedAt = newest articles come first. Default: publishedAt
        /// 
        /// • pageSize - int: The number of results to return per page. 20 is the default, 100 is the maximum.
        /// • page - int: Use this to page through the results.
        /// </param>
        /// <returns></returns>
        public async Task<ArticleData> GetListEverything(List<KeyValuePair<string, object>> parameters)
        {
            try
            {
                var parametros = GetParameters(parameters);
                var uri = new Uri(NewsConstants.EverythingUrl + parametros);
                var response = await GetAsync(uri);
                var json = await response.Content.ReadAsStringAsync();
                if (response.StatusCode != HttpStatusCode.OK)
                {
                    return new ArticleData() { Status = "error", Error = UnExpectedResponse(response, json) };
                }

                var result = JsonConvert.DeserializeObject<ArticleData>(json);
                return result;
            }
            catch (Exception ex)
            {
                return new ArticleData() { Status = "error", Error = new Error() { Message = ex.Message } };
            }
        }

        /// <summary>
        /// This endpoint returns the subset of news publishers that top headlines (/v2/top-headlines) 
        /// are available from. It's mainly a convenience endpoint that you can use to keep track of 
        /// the publishers available on the API, and you can pipe it straight through to your users.
        /// This list could be piped directly through to your users when showing them some of the 
        /// options available.
        /// </summary>
        /// <param name="parameters">
        /// • category: Find sources that display news of this category. 
        ///             - Possible options: business entertainment general health science sports technology . Default: all categories.
        /// • language: Find sources that display news in a specific language. 
        ///             - Possible options: ar de en es fr he it nl no pt ru se ud zh . Default: all languages.
        /// • country: Find sources that display news in a specific country. 
        ///            - Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . Default: all countries.
        /// </param>
        /// <returns>returns information (including name, description, and category) about the most notable sources we index.</returns>
        public async Task<SourceData> GetListSources(List<KeyValuePair<string, object>> parameters)
        {
            try
            {
                var parametros = GetParameters(parameters);
                var uri = new Uri(NewsConstants.SourcesUrl + parametros);
                var response = await GetAsync(uri);
                var json = await response.Content.ReadAsStringAsync();
                if (response.StatusCode != HttpStatusCode.OK)
                {
                    return new SourceData() { Status = "error", Error = UnExpectedResponse(response, json) };
                }

                var result = JsonConvert.DeserializeObject<SourceData>(json);
                return result;
            }
            catch (Exception ex)
            {
                return new SourceData() { Status = "error", Error = new Error() { Message = ex.Message } };
            }
        }

        public IList<string> GetAvailableListCategories()
        {
            return new List<string>()
            {
                "business", "entertainment", "general", "health", "science", "sports", "technology"
            };
        }
        public IList<string> GetAvailableListCountries()
        {
            return new List<string>()
            {
                "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu",
                "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in",
                "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz",
                "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th",
                "tr", "tw", "ua", "us", "ve", "za"
            };
        }
        public IList<string> GetAvailableListLanguages()
        {
            return new List<string>()
            {
                "ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"
            };
        }
        public IList<string> GetAvailableListSortBy()
        {
            return new List<string>()
            {
                "relevancy", "popularity", "publishedAt"
            };
        }        
    }
}
      