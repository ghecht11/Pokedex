import React from "react";
const PokemonList=()=>{
    return(
        <div className="pokeList">
            <div className="Pokemon-Container ghost">
                <div className="pokemon-number"> 
                    #001
                </div>
                <div className="pokemon-image">
                    <img src="./Imagenes/bulbasaur.png" alt=""/>
                </div>
                <div className="pokemon-name">
                    <span>Bulbasaur</span>
                </div>
            </div>
        </div>
    )
}

export default PokemonList;

/* className={`Pokemon-Container ${pokemon.type}`}

 */