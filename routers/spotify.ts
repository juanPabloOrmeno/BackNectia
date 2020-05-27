import { Router, Request, Response } from "express";
import axios from 'axios';
import qs from 'querystring';
import Token from "../classes/token";


const routerSpotify = Router();

//nuevo
routerSpotify.get('/nuevo', async (req: Request, res: Response) => {
    try {
        //obteniendo la lista de albums
        const config = { headers: { 'Authorization': 'Bearer ' + await Token.generarToken() } }
        let resp = await axios.get('https://api.spotify.com/v1/browse/new-releases', config)
        resp = resp.data.albums.items

        res.status(200).json({
            status: "ok",
            resp
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
})



export default routerSpotify;