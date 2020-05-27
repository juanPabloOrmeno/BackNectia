import { Router, Request, Response } from "express";



const routerSpotify = Router();



//login
routerSpotify.get('/busqueda', async (req: Request, res: Response) => {
    const body = req.body
    try {
        res.status(200).json({
            status: "ok"

        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
})



export default routerSpotify;