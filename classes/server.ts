import express from 'express'
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json'



export default class Server {

    public app: express.Application;
    public port: number = 3000;


    constructor() {
        this.app = express();
    }


    start() {
        this.app.listen(this.port, () => {
            this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
        });
        console.log('servidor corriendo en puerto: ' + this.port)
    }

}