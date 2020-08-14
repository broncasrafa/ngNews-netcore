using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using ngNews.Entity;
using ngNews.Service.Helpers;

namespace ngNews.Service.Classes
{
    public class HttpRequestProcessor
    {
        private HttpClient Client { get; }

        private HttpClientHandler _httpHandler = new HttpClientHandler();

        public HttpRequestProcessor()
        {
            if (Client == null)
                Client = new HttpClient(_httpHandler) { BaseAddress = new Uri(NewsConstants.BaseUrl) };
        }

        public async Task<HttpResponseMessage> SendAsync(HttpRequestMessage requestMessage)
        {
            var response = await Client.SendAsync(requestMessage);
            return response;
        }

        public async Task<HttpResponseMessage> GetAsync(Uri requestUri)
        {
            var response = await Client.GetAsync(requestUri);
            return response;
        }

        public async Task<HttpResponseMessage> SendAsync(HttpRequestMessage requestMessage, HttpCompletionOption completionOption)
        {
            var response = await Client.SendAsync(requestMessage, completionOption);
            return response;
        }

        public async Task<string> SendAndGetJsonAsync(HttpRequestMessage requestMessage, HttpCompletionOption completionOption)
        {
            var response = await Client.SendAsync(requestMessage, completionOption);
            return await response.Content.ReadAsStringAsync();
        }

        public async Task<string> GeJsonAsync(Uri requestUri)
        {
            var response = await Client.GetAsync(requestUri);
            return await response.Content.ReadAsStringAsync();
        }

        public Error UnExpectedResponse(HttpResponseMessage response, string json)
        {

            if (string.IsNullOrEmpty(json))
            {
                return new Error() { Code = "UnExpectedResponse", Message = $"Unexpected response status: {response.StatusCode}", Status = "error" };
            }

            return JsonConvert.DeserializeObject<Error>(json);
        }

        public T Get<T>(string url)
        {
            try
            {
                T type = default(T);

                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.Method = "GET";
                request.ContentType = "application/json; charset=utf-8";

                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    using (Stream stream = response.GetResponseStream())
                    {
                        using (StreamReader reader = new StreamReader(stream))
                        {
                            string responseFromServer = reader.ReadToEnd();

                            JavaScriptSerializer serializer = new JavaScriptSerializer()
                            {
                                MaxJsonLength = Int32.MaxValue,
                                RecursionLimit = 100
                            };

                            type = serializer.Deserialize<T>(responseFromServer);
                        }
                    }
                }

                return type;
            }
            catch (WebException)
            {
                return default(T);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public string GetParameters(List<KeyValuePair<string, object>> parameters)
        {
            if (parameters == null)
                return null;

            StringBuilder parametros = new StringBuilder();

            foreach (KeyValuePair<string, object> parameter in parameters)
            {
                parametros.AppendFormat($"&{parameter.Key}={parameter.Value}");
            }

            return parametros.ToString();
        }
    }
}
