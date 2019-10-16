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
    }
}
