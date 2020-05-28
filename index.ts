import Server from "./classes/server";
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'
import routerSpotify from "./routers/spotify";

require('./config/config');

const server = new Server();

//body parse
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());


//cors
server.app.use( cors({ origin: true, credentials: true }));

//rutas
server.app.use( '/spotify', routerSpotify);




//conectar bd
connectMongo();

async function connectMongo(){
    const config = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    try{
        await mongoose.connect("mongodb://localhost:27017/nectia",config);
        console.log('Base de datos conectada correctamente');
    }catch(e){
        setTimeout(()=>{
            console.log("Error en la conneccion con mongo - reintentando en 5 segundos");
            connectMongo();
        },5000);
    }
}

//levanta espress
server.start();