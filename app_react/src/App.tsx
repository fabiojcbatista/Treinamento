import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './components/Home';
import {AddCasa} from './components/addCasa';
import {EditCasa} from './components/editCasa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: '30rem', margin: "4rem auto"}}>
      <Router>
        <Routes>
        < Route path="/" element={<Home/>} />
        < Route path="/add" element={<AddCasa/>} />
        < Route path="/edit/:id" element={<EditCasa/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
