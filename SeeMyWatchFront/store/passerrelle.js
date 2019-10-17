class Passerelle {
    async Connection(login, password){
        let res = await fetch(`http://192.168.43.83:44338/Account/Login`,{
            method:"POST",
            body: JSON.stringify({login: login, password : password}),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).catch((result) => {return result;})
        return res.status;
    }

    async Custom(taille, matiere, couleurCadrant, couleurBracelet){
        console.log(taille, matiere, couleurCadrant, couleurBracelet);
        let res = await fetch(`http://192.168.43.83:44338/Account/Custom`,{
            method:"POST",
            body: JSON.stringify({taille: taille, matiere: matiere, couleurCadrant: couleurCadrant, couleurBracelet: couleurBracelet}),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).catch((result) => {return result;})
        return res.status;
    }
}

const myPasserelle = new Passerelle();
export default myPasserelle;