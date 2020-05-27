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
        let respuesta: Array<object> = resp.data.albums.items

        respuesta = respuesta.map((resp: any)=>{
            return {
                img: resp.images[0].url, 
                name: resp.name,
                artists: resp.artists.map((artista: any)=> artista.name)
            }
        })

        res.status(200).json({
            status: "ok",
            respuesta
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
})


//buscar
routerSpotify.get('/buscar', async (req: Request, res: Response) => {
    try {
        //obteniendo la lista de albums
        const config = { headers: { 'Authorization': 'Bearer ' + await Token.generarToken() } }
        let resp = await axios.get('https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5', config)
        let respuesta: Array<object> = resp.data

        res.status(200).json({
            status: "ok",
            respuesta
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
})



export default routerSpotify;