import React from "react";
import Data from "../db.json"


const PokemonList=()=>{
    const Pokemons=Data;
    console.log(Pokemons);
    return(
        <>
            <div className="pokeList">
                {Pokemons.map((pokemon,index)=>{ 
                    
                    <div className={`Pokemon-Container ${pokemon.type}`}>
                    <div className="pokemon-number"> 
                        {pokemon.id}
                    </div>
                    <div className="pokemon-image">
                        <img src={`${pokemon.img}`} alt=""/>
                    </div>
                    <div className="pokemon-name">
                        <span>{pokemon.name}</span>
                    </div>
                </div>
                })}
                
asd
                
            </div>
        </>
    )
}

export default PokemonList;

/* className={`Pokemon-Container ${pokemon.type}`}

 */