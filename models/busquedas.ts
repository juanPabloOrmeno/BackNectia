import { Schema, model, Document } from 'mongoose'


const busquedaSchema = new Schema({

    img:{
        type: String, 
    },
    name:{
        type: String, 
        default: 'sin nombre'
    },
    url:{
        type: String,
    },
})





interface Ibusqueda extends Document{
    img: string;
    name: string;
    url: string;
}


export const Busqueda = model<Ibusqueda>('Busqueda', busquedaSchema);