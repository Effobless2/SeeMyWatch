using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SeeMyWatchDBConnection;
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
            //await signInManager.SignOutAsync();
            return RedirectToAction("index", "home");
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(Models.LoginUser model)
        {
            /*if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(
                    model.Email, model.Password, model.RememberMe, false);

                if (result.Succeeded)
                {
                    return RedirectToAction("index", "home");
                }

                ModelState.AddModelError(string.Empty, "Invalid Login Attempt");
            }*/

            return View(model);
        }
    }
}