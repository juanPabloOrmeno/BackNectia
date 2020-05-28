import { Schema, model, Document } from 'mongoose'


const nuevaSchema = new Schema({

    img:{
        type: String, 
    },
    name:{
        type: String, 
        default: 'sin nombre'
    },
    artists:[{
        type: String,
    }],
})





interface Inueva extends Document{
    img: string;
    name: string;
    artists: string[];
}


export const Nueva = model<Inueva>('nueva', nuevaSchema);