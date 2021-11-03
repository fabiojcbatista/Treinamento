import {Schema, model} from 'mongoose';
export interface Produto{
    nome: string;
    cost: number;
    category?: string; //email? é opcional!!

}

export const ProdutoSchema = new Schema<Produto>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    cost: {type: Number, required: true, min: 0},
    category: String
});

export const ProdutoModel = model<Produto>('Produto', ProdutoSchema, 'produtos');