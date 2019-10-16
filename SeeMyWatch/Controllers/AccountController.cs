using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SeeMyWatch.BO;
using SeeMyWatchDBConnection;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeeMyWatch.Controllers
{

    public class AccountController : Controller
    {
        private readonly ISeeMyWatchDBConnection dbConnector;

        public static readonly ConcurrentDictionary<string, Utilisateur> _users = new ConcurrentDictionary<string, Utilisateur>();

        public AccountController(ISeeMyWatchDBConnection dbCon)
        {

            dbConnector = dbCon;
        }

        public async Task<IActionResult> Index()
        {
           // List<string> res = await dbConnector.GetAllUsers();
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
            Utilisateur res = await dbConnector.UserAuthentification(login, password);
            if (res == null)
            {
                return NotFound();
            }
            _users.TryAdd(login, res);
            return Ok();
        }
    }
}