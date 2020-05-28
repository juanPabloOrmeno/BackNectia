import { Router, Request, Response } from "express";
import axios from 'axios';
import Token from "../classes/token";
import { Busqueda } from "../models/busquedas";
import { Nueva } from "../models/nuevas";


const routerSpotify = Router();

//nuevo
routerSpotify.get('/nuevo', async (req: Request, res: Response) => {
    try {
        const config = { headers: { 'Authorization': 'Bearer ' + await Token.generarToken() } }
        let resp = await axios.get(process.env.URL_NUEVO + '' , config)
        let respuesta: Array<object> = resp.data.albums.items

        respuesta = respuesta.map((resp: any)=>{
            return {
                img: resp.images[0].url, 
                name: resp.name,
                artists: resp.artists.map((artista: any)=> artista.name)
            }
        }).filter(item => typeof item.img === 'string')
          .filter(item => typeof item.name === 'string')


        Nueva.create(respuesta)

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

        const body = req.query
        let busqueda = body.buscar

        if(busqueda === undefined)
            busqueda = ''

        const config = { headers: { 'Authorization': 'Bearer ' + await Token.generarToken() } }
        let resp = await axios.get(process.env.URL_BUSQUEDA + '' + busqueda + "&type=artist&limit=30&offset=5", config)

        let respuesta: Array<object> = resp.data.artists.items

        respuesta = respuesta.map((resp: any)=>{
            let imagen = resp.images.map((img: any)=> img.url )
            return {
                img: imagen.shift(),
                name: resp.name, 
                url:  "https://open.spotify.com/artist/" + resp.uri.replace("potify:artist:", "")
            }
        }).filter(item => typeof item.img === 'string')
          .filter(item => typeof item.name === 'string')


        Busqueda.create(respuesta)
        
        
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