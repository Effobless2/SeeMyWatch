using SeeMyWatch.BO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace SeeMyWatchDBConnection
{
    public interface ISeeMyWatchDBConnection
    {
        IDbConnection GetConnection();

        Task<List<string>> GetAllUsers();
        Task<Utilisateur> UserAuthentification(string login, string password);

    }
}
