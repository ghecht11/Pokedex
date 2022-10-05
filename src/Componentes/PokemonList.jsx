import React from "react";
const PokemonList=()=>{
    return(
        <div className="pokeList">
            <div className="Pokemon-Container">
                <div> 
                    #001
                </div>
                <div>
                    <img src="./Imagenes/bulbasaur.png" alt=""/>
                </div>
                <div className="pokemon-name">
                    Bulbasaur
                </div>
                

            </div>
        </div>
    )
}

export default PokemonList;

/* className={`Pokemon-Container ${pokemon.type}`}

 */