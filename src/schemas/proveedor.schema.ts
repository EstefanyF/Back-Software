import { Schema } from 'mongoose';

export const ProveedorSchema = new Schema ({

    nombre: String,
    diretion: String,
    phone: Number,
    
})