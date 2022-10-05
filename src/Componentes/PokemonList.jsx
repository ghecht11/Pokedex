import React from "react";
import Pokeapi from "../main";

const PokemonList=()=>{
    return(
        <>
        <Pokeapi/>
            <div className="pokeList">
                
                <div className="Pokemon-Container grass">
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

                <div className="Pokemon-Container electric">
                    <div className="pokemon-number"> 
                        #025
                    </div>
                    <div className="pokemon-image">
                        <img src="./Imagenes/pikachu.png" alt=""/>
                    </div>
                    <div className="pokemon-name">
                        <span>Pikachu</span>
                    </div>
                </div>

                <div className="Pokemon-Container fire">
                    <div className="pokemon-number"> 
                        #025
                    </div>
                    <div className="pokemon-image">
                        <img src="./Imagenes/charmander.png" alt=""/>
                    </div>
                    <div className="pokemon-name">
                        <span>Charmander</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonList;

/* className={`Pokemon-Container ${pokemon.type}`}

 */