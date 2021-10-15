
import { connect, disconnect } from 'mongoose';
import { PessoaModel } from './pessoa';

const url = 'mongodb+srv://fabio:2010@cluster0.u9ema.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//const url = 'mongodb://localhost:27017';
//mongodb+srv://alunos:alunos@cluster0-XXXXX.azure.mongodb.net/test?retryWrites=true&w=m

async function main(){

    try{
         await connect(url);
         console.log('Conectado!');


         //1 - INSERIR
         const documentoInserido = await PessoaModel.create({
             nome: 'John Doe',
             idade: 25,
             email: 'jd@gmail.com'
         });

         console.log('Inserido!');
         console.log(documentoInserido);

         //2 - BUSCAR
         const pessoas = await PessoaModel.find().exec();
         console.log('Resultado da consulta Exec: ')
         console.log(pessoas);

         const pessoas2 = await PessoaModel.find().lean();
         console.log('Resultado da consulta Lean: ')
         console.log(pessoas2);

         const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec;
         console.log('Resultado da Consulta Total DoC');
         console.log(numero);

         //3 - Alterar
         const documento = await PessoaModel.findById('6169c9130052a4d695b28229').exec();
         if (documento!= null){
             documento.idade = 30;
             documento.email = 'fd@gmail.com';
             const documentoatualizado = await documento.save();
             console.log('Resultado da Alteração');
             console.log(documentoatualizado);
         }
         
         //4 - Excluir
         const documentox = await PessoaModel.findById('169c9130052a4d695b28229').exec();
         if (documentox != null){
             const documentoRemovido = await documentox.remove();
             console.log('Resultado da Exclusão');
             console.log(documentoRemovido);

         }


    }catch(error){
        console.log('Falha de acesso!');
        console.log(error);

    }finally{
        await disconnect();
        console.log('Desconectado do mongodb Atlas!');
    }


}

main();