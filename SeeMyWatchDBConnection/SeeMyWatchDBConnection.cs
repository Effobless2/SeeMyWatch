using Microsoft.Extensions.Options;
using SeeMyWatch.BO;
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
        private readonly string connectionString; 
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

        public async Task<Utilisateur> UserAuthentification(string login, string password)
        { 
            Utilisateur res = null;
            using (IDbConnection conn = GetConnection())
            {
                using (IDbCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.CommandText = $"SELECT * FROM UserAccount WHERE login='{login}' AND password='{password}'";
                    

                    using (IDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            res = new Utilisateur()
                            {
                                login = (string)reader["login"],
                                password = (string)reader["password"],
                                UserId = Convert.ToInt32(reader["UserId"])
                            };
                            
                        }
                    }
                }
            }
            return res;
        }
        public async Task<Montre> AddMontre(string taille, string matiere, string couleurCadrant, string couleurBracelet)
        {
            Montre res = null;
            using (IDbConnection conn = GetConnection())
            {
                using (IDbCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.CommandText = $"INSERT INTO customWatch(taille, matiere, couleurBracelet, couleurCadrant, UID) VALUES('{taille}', '{matiere}', '{couleurBracelet}', '{couleurCadrant}',1)";


                    using (IDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            res = new Montre()
                            {
                                taille = (string)reader["taille"],
                                matiere = (string)reader["matiere"],
                                couleurBracelet = (string)reader["couleurBracelet"],
                                couleurCadrant = (string)reader["couleurCadrant"]
                            };

                        }
                    }
                }
            }
            return res;
        }
    }
}
