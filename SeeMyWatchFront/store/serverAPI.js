class ServerAPI {
    Connection(login, password){
        return fetch(`http://192.168.1.59:44338/Account/Login`,{
            method:"POST",
            body: JSON.stringify({login: login, password : password}),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then((result) => {/*return result.status;*/ return 200})
    }

    Custom(taille, matiere, couleurCadrant, couleurBracelet){
        return fetch(`http://192.168.1.59:44338/Account/Custom`,{
            method:"POST",
            body: JSON.stringify({taille: taille, matiere: matiere, couleurCadrant: couleurCadrant, couleurBracelet: couleurBracelet}),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then((result) => {return result.status;})
    }
}

const myAPI = new ServerAPI();
export default myAPI;