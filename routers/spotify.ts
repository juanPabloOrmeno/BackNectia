import { Router, Request, Response } from "express";
import axios from 'axios';
import qs from 'querystring';
import Token from "../classes/token";

const routerSpotify = Router();

//nuevo
routerSpotify.get('/nuevo', async (req: Request, res: Response) => {
    try {
      


        let resp = await Token.generarToken();


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