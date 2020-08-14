using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ngNews.API.Util;
using ngNews.Entity;
using ngNews.Service.Interfaces;

namespace ngNews.API.Controllers
{
    [Route("api/v1/news")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsServices _services;

        private string[] topHeadlinesValidParams = { "country", "category", "sources", "q", "pageSize", "page" };
        private string[] everythingValidParams = { "sources", "q", "qInTitle", "domains", "excludeDomains", "from", "to", "sortBy", "language", "pageSize", "page" };
        private string[] sourcesValidParams = { "language", "category", "country" };

        public NewsController(INewsServices services)
        {
            _services = services;
        }

        
        #region [ topHeadlines ]
        [HttpGet]
        [Route("top-headlines")]
        public async Task<IActionResult> GetListTopHeadlines()
        {
            try
            {
                IQueryCollection queryParams = Request.Query;

                if(!AppUtils.IsValidParameters(queryParams, topHeadlinesValidParams))
                {
                    return BadRequest(new Error() { Message = $"A consulta contém parâmetros inválidos. Parâmetros válidos: {string.Join(", ", topHeadlinesValidParams)}", Status = "error" });
                }

                List<KeyValuePair<string, object>> parameters = AppUtils.GetParameters(queryParams, topHeadlinesValidParams);

                if (parameters.Exists(c => c.Key == "sources"))
                {
                    if(parameters.Exists(c => c.Key == "country" || c.Key == "category"))
                    {
                        return BadRequest(new Error() { Message = $"Não é permitido utilizar os parâmetros 'country' ou 'category' junto com o parâmetro 'sources'.", Status = "error" });
                    }
                }                    

                var result = await _services.GetListTopHeadlines(parameters);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion


        #region [ everything ]
        [HttpGet]
        [Route("everything")]
        public async Task<IActionResult> GetListEverything()
        {
            try
            {
                IQueryCollection queryParams = Request.Query;

                if (!AppUtils.IsValidParameters(queryParams, everythingValidParams))
                {
                    return BadRequest(new Error() { Message = $"A consulta contém parâmetros inválidos. Parâmetros válidos: {string.Join(", ", everythingValidParams)}", Status = "error" });
                }

                List<KeyValuePair<string, object>> parameters = AppUtils.GetParameters(queryParams, everythingValidParams);

                var result = await _services.GetListEverything(parameters);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion


        #region [ sources ]
        [HttpGet]
        [Route("sources")]
        public async Task<IActionResult> GetListSources()
        {
            try
            {
                IQueryCollection queryParams = Request.Query;

                if(queryParams.Count > 0)
                {
                    if (!AppUtils.IsValidParameters(queryParams, sourcesValidParams))
                    {
                        return BadRequest(new Error() { Message = $"A consulta contém parâmetros inválidos. Parâmetros válidos: {string.Join(", ", sourcesValidParams)}", Status = "error" });
                    }
                }                

                List<KeyValuePair<string, object>> parameters = AppUtils.GetParameters(queryParams, sourcesValidParams);

                var result = await _services.GetListSources(parameters);


                //var t = result.Sources.Select(c => new { name = c.Name});

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion


        #region [ category ]
        [HttpGet]
        [Route("categories")]
        public IActionResult GetCategories()
        {
            try
            {
                var result = _services.GetAvailableListCategories();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion

        #region [ languages ]
        [HttpGet]
        [Route("languages")]
        public IActionResult GetLanguages()
        {
            try
            {
                var result = _services.GetAvailableListLanguages();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion

        #region [ countries ]
        [HttpGet]
        [Route("countries")]
        public IActionResult GetCountries()
        {
            try
            {
                var result = _services.GetAvailableListCountries();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion

        #region [ sortBy ]
        [HttpGet]
        [Route("sortBy")]
        public IActionResult GetSortBy()
        {
            try
            {
                var result = _services.GetAvailableListSortBy();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error() { Message = $"Erro ao retornar os dados. {ex.Message}", Status = "error" });
            }
        }
        #endregion
    }
}