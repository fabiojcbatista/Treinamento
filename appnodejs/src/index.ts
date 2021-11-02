import express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';

const app = express();
const port = 3000;
const cursos = ['Fullstack Master','Desenvolvimento Web', 'Apresentador de youtube'];

app.use(consoleLogger);
app.use(json());

app.get('/', (req, res) => {
    res.send('Início com "/" !');
});

//Retornar cursos por index
app.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[parseInt(index)]);
    //res.send(`Alô, ${cursos[index]}!`);
});

//Retornar todos os cursos
app.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Inserir curso
app.post('/nome', (req, res) => {
    const {nome} = req.body;
    cursos.push(nome);
    if (nome) {
        res.send(`Incluído, ${nome}!`);
    } else {
        res.status(400).send('Nome não informado');
    }
});

//Atualizar um curso
app.put('/cursos/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[parseInt(index)] = name;
    return res.json(cursos);
})

//deletar um cursos
app.delete('/cursos/:index', (req,res) => {
    const {index} = req.params;
    cursos.splice(parseInt(index),1);
    return res.json({message: 'Curso deletado'});
})

app.get('/erro', (req, res) => {
    throw new Error('Erro inesperado');
});

const server = app.listen(port, () => {
    console.log(`Express na porta ${port}`);
});

//função de middleware
function consoleLogger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path}`);
    next();
}
