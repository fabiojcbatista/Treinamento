import { connect, disconnect } from 'mongoose';
import { ProdutoModel } from './produto';
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyparser, {json} from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { MongoParseError } from 'mongoose/node_modules/mongodb';
async function main(){

    try{
        const app = express();
        app.use(express.json());
        app.use(cors());
        app.use(morgan('tiny'));
        app.use(bodyparser.urlencoded({extended:true}));
        
        dotenv.config({path:'.env'});
        const port = process.env.port || 8080;

        
        const url = 'mongodb+srv://fabio:2010@cluster0.u9ema.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        //const url = 'mongodb://localhost:27017';
        //mongodb+srv://alunos:alunos@cluster0-XXXXX.azure.mongodb.net/test?retryWrites=true&w=m

         await connect(url);
         console.log('Conectado!');
         app.use(json());
         app.listen(port, ()=>{
            console.log(`Servidor na porta ${port}`);
        })
        
         app.get("/insert/", async (req, res)=>{
            
            //const Produto = new ProdutoModel(values);
            //await Produto.save();
             const doc = await ProdutoModel.create({
                nome: req.query.nome, 
                cost: req.query.cost,
                category: req.query.category
             });

             
         console.log('Inserido!');
         console.log(doc);
             //await disconnect();
             //console.log('Desconectado do mongodb Atlas!');
             res.send(`Inserção Produto: Nome: ${req.body.nome}, Cost: ${req.body.cost}, Category: ${req.body.category}`)
         });


         app.get("/", async (req, res)=>{
            
            //const Produto = new ProdutoModel(values);
            //await Produto.save();
             const doc = await ProdutoModel.create({
                nome: req.body.nome.toString(), 
                cost: parseInt(req.body.cost),
                category: req.body.category.toString()
             });

             
         console.log('Inserido!');
         console.log(doc);
             //await disconnect();
             //console.log('Desconectado do mongodb Atlas!');
             res.send(`Inserção Produto /: Nome: ${req.body.nome}, Cost: ${req.body.cost}, Category: ${req.body.category}`)
         });
         
         
         /*
         //1 - INSERIR
         const documentoInserido = await ProdutoModel.create({
             nome: 'Alface',
             cost: 0.89,
             category: 'Verdura'
         });

         console.log('Inserido!');
         console.log(documentoInserido);

         //2 - BUSCAR
         const produtos = await ProdutoModel.find().exec();
         console.log('Resultado da consulta Exec: ')
         console.log(produtos);

         const produtos2 = await ProdutoModel.find().lean();
         console.log('Resultado da consulta Lean: ')
         console.log(produtos2);

         const numero = await ProdutoModel.where('cost').lte(10).countDocuments().exec;
         console.log('Resultado da Consulta Total DoC');
         console.log(numero);

         //3 - Alterar
         const documento = await ProdutoModel.findById('6169c9130052a4d695b28229').exec();
         if (documento!= null){
             documento.nome = 'Repolho'
             documento.cost = 3.00;
             documento.category = 'Verdura';
             const documentoatualizado = await documento.save();
             console.log('Resultado da Alteração');
             console.log(documentoatualizado);
         }
         
         //4 - Excluir
         const documentox = await ProdutoModel.findById('169c9130052a4d695b28229').exec();
         if (documentox != null){
             const documentoRemovido = await documentox.remove();
             console.log('Resultado da Exclusão');
             console.log(documentoRemovido);

         }
        



         app.listen(port, ()=>{
             console.log(`Servidor na porta ${port}`);
         })

         */

    }catch(error){
        console.log('Falha de acesso!');
        console.log(error);

    }finally{
        //await disconnect();
       // console.log('Desconectado do mongodb Atlas!');
    }


}

main();
