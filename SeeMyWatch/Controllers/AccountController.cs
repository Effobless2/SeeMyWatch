using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SeeMyWatch.Controllers.RequestsObjects;
using Microsoft.IdentityModel.Tokens;
using SeeMyWatch.BO;
using SeeMyWatchDBConnection;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
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

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginInfos content)
        {
            string login = content.login;
            string password = content.password;
            Console.WriteLine("");
            Utilisateur res = await dbConnector.UserAuthentification(login, password);

            if (res == null)
            {
                return NotFound();
            }
            Random reng = new Random();
            int token = reng.Next(0,1234567998);
            _users.TryAdd(token + "", res);
            return Ok(new { token });
        }

        public async Task<IActionResult> Logout()
        {
            if (HttpContext.User.Identity.IsAuthenticated)
            {
                await HttpContext.SignOutAsync();
                return Ok("LogOut !!!");

            }

            return Redirect("/");
        }

        [HttpPost]
        public async Task<IActionResult> custom([FromBody]CustomInfos content)
        {
            string taille = content.taille;
            string couleurBracelet = content.couleurBracelet;
            string matiere = content.matiere;
            string couleurCadrant = content.couleurCadrant;
            Console.WriteLine(taille, couleurBracelet, matiere, couleurCadrant);
            Montre res = await dbConnector.AddMontre(taille, matiere, couleurCadrant, couleurBracelet);
            return Ok("");
        }
    }
}