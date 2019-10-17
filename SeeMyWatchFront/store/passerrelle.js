class Passerelle {
    async Connection(login, password){
        let res = await fetch(`http://192.168.43.220:44338/Account/Login`,{
            method:"POST",
            body: JSON.stringify({login: login, password : password}),
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