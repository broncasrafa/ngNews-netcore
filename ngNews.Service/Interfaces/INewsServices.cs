using System.Collections.Generic;
using System.Threading.Tasks;
using ngNews.Entity;

namespace ngNews.Service.Interfaces
{
    public interface INewsServices
    {
        Task<ArticleData> GetListTopHeadlines(List<KeyValuePair<string, object>> parameters);
        Task<ArticleData> GetListEverything(List<KeyValuePair<string, object>> parameters);
        Task<SourceData> GetListSources(List<KeyValuePair<string, object>> parameters);
        IList<string> GetAvailableListCategories();
        IList<string> GetAvailableListCountries();
        IList<string> GetAvailableListLanguages();
        IList<string> GetAvailableListSortBy();        
    }
}
