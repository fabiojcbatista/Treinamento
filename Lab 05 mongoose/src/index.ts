import { connect } from 'mongoose';
import { disconnect } from 'process';

const url = 'mongodb+srv://fabiojcb:<password>@cluster0.apwsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function main(){

    try{
         await connect(url);
         console.log('Conectado!');


    }catch(error){
        console.log('Falha de acesso!');
        console.log(error);

    }finally{
        await disconnect();
    }


}