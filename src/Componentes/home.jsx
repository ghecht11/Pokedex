import React from "react"
import Navbar from "./Nav"
import PokemonList from "./PokemonList"

const Home = (props) => {
    return(
        <>
        <Navbar/>
        <PokemonList list={props.list}/>
        </>
    )
}

export default Home;