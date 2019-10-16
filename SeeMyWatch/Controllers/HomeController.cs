using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SeeMyWatch.Models;
using SeeMyWatchDBConnection;

namespace SeeMyWatch.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISeeMyWatchDBConnection dbConnector;
        
        public HomeController(ISeeMyWatchDBConnection dbCon)
        {
            dbConnector = dbCon;
        }
        public async Task<IActionResult> Index()
        {

            List<string> res = await dbConnector.GetAllUsers();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
