using Microsoft.Extensions.Options;
using SQLite.Net.Platform.Win32;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Threading.Tasks;

namespace SeeMyWatchDBConnection
{
    public class SeeMyWatchDBConnection : ISeeMyWatchDBConnection
    {
        private string connectionString;

        public SeeMyWatchDBConnection(IOptions<SqlServiceOptions> options)
        {
            connectionString = options.Value.ConnectionString;
        }

        public async Task<List<string>> GetAllUsers()
        {
            List<string> res = new List<string>();
            using(IDbConnection conn = GetConnection())
            {
                using(IDbCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.CommandText = "SELECT * FROM UserAccount";
                    using(IDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            res.Add((string)reader["login"]);
                        }
                    }
                }
            }
            return res;
        }

        public IDbConnection GetConnection()
        {
            IDbConnection conn = new SQLiteConnection(connectionString);
            conn.Open();
            return conn;
        }




    }
}
