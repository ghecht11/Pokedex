import React from "react"
import Navbar from "./Nav"
import PokemonList from "./PokemonList"
import { useState, useEffect } from 'react';
import Data from "../db.json"


const Home = (props) => {

    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.list)

  useEffect(()=>{
      let auxList = props.list
      if(!orderByNumber){
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
      setOrderedList(auxList)
  },[orderByNumber])

  function changeOrder (){
    setOrderByNumber(!orderByNumber)
    
  }

  
    return(
        <>
        <Navbar  changeOrder={changeOrder} orderByNumber={orderByNumber} />
        <PokemonList list={orderedList}/>
        </>
    )
}

export default Home;