
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/Home';
import Modal from './Componentes/Modal/modal';
import { useState, useEffect } from 'react';
import Data from "./db.json"


function App() {

  const [list, SetList] = useState(Data.pokemones); 
  const [order, SetOrder] = useState("id");

  useEffect(()=>{
      let auxList = list
      if(order==="id"){
        console.log("Ordeno por letra")
        auxList.sort((a,b)=>String(a.name).localeCompare(b.name))
        /*Setea el orden por letra */
      }
      else {
        console.log("Ordeno por numero")
        auxList.sort((a,b)=>a.id - b.id)
        /*Seteo el orden por id */
      }
      console.log(auxList)
      SetList(auxList)
  },[order])

  function changeOrder (){
    SetOrder((order=="id") ? "Letter" : "id")
  }

  return (
     
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home list ={list}/>}/>
      <Route path="/:id" element={<Modal/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/