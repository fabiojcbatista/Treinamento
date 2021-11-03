import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  
  const [nome, setNome] = useState('');
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState('');

  const insert = () => {
    //console.log(values);
        
    Axios.post('http://localhost:3000/insert', {
      nome: nome,
      cost: cost,
      category: category,
    });
    //.then((response) => {
      //console.log(response);
    //});
  };

  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className ='register--title'>Scrim Shop</h1>
        <input 
          type="text" 
          name="nome"
          placeholder="Nome"
          className= "register--input"
          onChange={(event)=>{
            setNome(event.target.value);
          }}
        />
        <input 
          type="text" 
          name="cost"
          placeholder="Preço"
          className= "register--input"
          onChange={(event)=>{
            setCost(parseInt(event.target.value));
          }}
        />
        <input 
          type="text" 
          name="category"
          placeholder="categoria"
          className= "register--input"
          onChange={(event)=>{
            setCategory(event.target.value);
          }}
        />
        <button 
        className='register--button'
        onClick={insert}
        >Cadastrar</button>
      </div>
      
    </div>
  );
}

export default App;
