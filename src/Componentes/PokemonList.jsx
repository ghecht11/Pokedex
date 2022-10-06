import React from "react";
import Data from "../db.json"


const PokemonList=()=>{
    const Pokemons=Data;
    console.log(Pokemons);
    return(
        <>
            <div className="pokeList">
                {Pokemons.pokemones.map((pokemon,index)=>{ 
                    return (
                    <div key={pokemon.id}>
                    
                    <div className={`Pokemon-Container ${pokemon.type}`} >
                    <div className="pokemon-number"> 
                        #{pokemon.id}
                        
                    </div>
                    <div className="pokemon-image">
                        <img src={pokemon.image} alt=""/>
                        

                    </div>
                    <div className="pokemon-name">
                        <span>{pokemon.name}</span>
                    </div>
                </div>
                </div>
                    )
                })}
                
                
            </div>
        </>
    )
}

export default PokemonList;

/* className={`Pokemon-Container ${pokemon.type}`}

 */