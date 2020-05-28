import axios from 'axios';
import qs from 'querystring';

export default class Token{

    
    static async generarToken()  {

        try{
            const requestBody = {
                grant_type: "client_credentials",
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET 
            }
            const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    
            let resp = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(requestBody), config)
            return resp.data.access_token
        }catch(err){
            return err
        }
        
    }


}