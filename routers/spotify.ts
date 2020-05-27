import { Router, Request, Response } from "express";
import axios from 'axios';
import qs from 'querystring';

const routerSpotify = Router();

//nuevo
routerSpotify.get('/nuevo', async (req: Request, res: Response) => {
    try {
        //obteniendo el token
        const requestBody = {
            grant_type: "client_credentials",
            client_id: "5e03c04072654260a7c983e65ebf373d",
            client_secret: "cd8820466a2a4e75aa25524d92945268"
        }


        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

        let resp = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(requestBody), config)
        resp = resp.data.access_token



        //obteniendo la lista de albums
        const config2 = { headers: { 'Authorization': 'Bearer ' + resp } }

        let resp2 = await axios.get('https://api.spotify.com/v1/browse/new-releases', config2)

        resp2 = resp2.data.albums.items

        res.status(200).json({
            status: "ok",
            resp2
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
})



export default routerSpotify;