import {MongoClient, ObjectId} from 'mongodb';
import { Pessoa } from './pessoa';

const uri = 'mongodb+srv://fabiojcb:<password>@cluster0.apwsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const cliente = new MongoClient(uri);

async function main(){

    try{

        //1 - CONEXÃO
        await cliente.connect();
        console.log('Conectado ao DB Atlas!');

        //2 - criar e inserir pessoa no BD
        //criar objeto e mandar inserir
        const basededados = cliente.db('meudb');
        const colecao = basededados.collection<Pessoa>('pessoas');
        const pessoa: Pessoa = {
            nome: 'Lucas',
            idade: 21
        }
        const resultado = await colecao.insertOne(pessoa);
        console.log('Inserido: ${resultado.insertedId}');

        //3 - Procurar, consulta
        const pessoas = await colecao.find().toArray();
        console.log('Resultado da consulta: ');
        console.log(pessoas);

        const numero = await colecao.find({idade: {$lte: 18}}).count();
        console.log('Resultado da Consulta. ');
        console.log(numero);

        //4 - Alterar
        const resultadoAlteracao = await colecao.updateOne({_id: new ObjectId('61684326e1a81282ac2')},{$set: {idade:18}})
        console.log('Resultado da Alteração');
        console.log(pessoas);
        
        //5 - Excluir
        const resultadoExclusao = await colecao.deleteOne({_id: new ObjectId('61684326e1a81282ac2')});
        console.log('Resultado da Exclusão');
        console.log(resultadoExclusao.deletedCount);

    }catch(error)
    {
        console.log('Falha de acesso ao DB');
        console.error(error);
    }finally{
        await cliente.close();
    }
}

main();