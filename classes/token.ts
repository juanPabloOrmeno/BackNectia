import axios from 'axios';
import qs from 'querystring';

export default class Token{

    
    static async generarToken()  {

        try{
            const requestBody = {
                grant_type: "client_credentials",
                client_id: "5e03c04072654260a7c983e65ebf373d",
                client_secret: "cd8820466a2a4e75aa25524d92945268"
            }
            const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    
            let resp = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(requestBody), config)
            return resp.data.access_token
        }catch(err){
            return err
        }
        
    }


}