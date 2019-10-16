using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SeeMyWatchDBConnection;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeeMyWatch.Controllers
{

    public class AccountController : Controller
    {
        private readonly ISeeMyWatchDBConnection dbConnector;

        public AccountController(ISeeMyWatchDBConnection dbCon)
        {
            dbConnector = dbCon;
        }

        public async Task<IActionResult> Index()
        {
            List<string> res = await dbConnector.GetAllUsers();
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            return RedirectToAction("index", "home");
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string login, string password)
        {
            List<string> res = await dbConnector.UserAuthentification(login, password);

            if (res.Count == 0) 
            {
                return NotFound();
            }
            return Ok();
        }
    }
}