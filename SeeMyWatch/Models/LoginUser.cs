using System;
using System.ComponentModel.DataAnnotations;

namespace SeeMyWatch.Models
{
    public class LoginUser
    {
        [Required]
        [EmailAddress]

        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remeber me")]

        public bool RemeberMe { get; set; }
        public bool RememberMe { get; internal set; }
    }
}
