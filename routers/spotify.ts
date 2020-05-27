import { Router, Request, Response } from "express";
import axios from 'axios';
import qs from 'querystring';

const routerSpotify = Router();

//busqueda
routerSpotify.get('/busqueda', async (req: Request, res: Response) => {
    const body = req.body
    try {
        const requestBody = {
            grant_type: "client_credentials",
            client_id: "5e03c04072654260a7c983e65ebf373d",
            client_secret: "cd8820466a2a4e75aa25524d92945268"
          }
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          
          let resp = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(requestBody), config)
          resp = resp.data
          
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