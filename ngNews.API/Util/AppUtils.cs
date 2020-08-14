using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace ngNews.API.Util
{
    public static class AppUtils
    {
        /// <summary>
        /// Converte a query string da requisição http em uma lista de KeyValuePairs.
        /// </summary>
        /// <param name="queryParams">http request query string collection</param>
        /// <param name="validParams">lista de parametros esperados pela api</param>
        /// <returns>uma lista de KeyValuePairs apartir da query string da requisição</returns>
        public static List<KeyValuePair<string, object>> GetParameters(IQueryCollection queryParams, string[] validParams)
        {
            if (queryParams.Count == 0)
                return null;

            List<KeyValuePair<string, object>> parameters = new List<KeyValuePair<string, object>>();

            foreach (var param in queryParams)
            {
                parameters.Add(new KeyValuePair<string, object>(param.Key, param.Value));
            }

            return parameters;
        }

        /// <summary>
        /// Verifica se os parametros são validos
        /// </summary>
        /// <param name="queryParams">http request query string collection</param>
        /// <param name="validParams">lista de parametros esperados pela api</param>
        /// <returns>true se todos os parametros são validos e esperados pela api</returns>
        public static bool IsValidParameters(IQueryCollection queryParams, string[] validParams)
        {
            if (queryParams.Count == 0)
                return false;

            foreach (var param in queryParams)
            {
                if (!validParams.ToList().Exists(c => c == param.Key))
                    return false;
            }

            return true;
        }
    }
}
