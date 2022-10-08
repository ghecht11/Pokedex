import React, { useState} from "react";
import { useParams } from "react-router-dom";
import Data from "./db.json"


const Modal =()=>{
        const Pokemons=Data;
        const params = useParams()
        const [pokemon,setPokemon] = useState(Pokemons.pokemones.find((pokemon)=>pokemon.id===params.id))
        console.log("hola");
    return(
        
        <>
        <div className={`Modal-grid ${pokemon.background}`}>
            <div className="modal-name"> 
                <div className="modal-1row">
                    <div>
                        <img src="./Imagenes/arrow-left.svg" className="white" alt=""/>
                    </div>

                    <div>{pokemon.name}</div>

                    <div>
                        #{pokemon.id}
                    </div>
                </div>

              
                <div className="modal-2row">
                    <div className="white arrow">
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </div>

                    <div className="div-poke-img">
                        <img src={pokemon.image} className="modal-poke-img" alt="" />
                    </div>

                    <div className="white arrow">
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </div>
                </div>
            </div>
            
            <div className="modal-bottom">


                <div className={`modal-type ${pokemon.background}`}>
                    <span>{pokemon.type}</span>
                </div>

                
                <div className={`about ${pokemon.type}`}> 
                    About
                </div>


                <div className="modal-info"> 
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div className="bolder">{pokemon.weight}</div>    
                        </div>
                        <div>Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div className="bolder">{pokemon.height}</div>
                        </div>
                        <div>Height</div>
                    </div>

                    <div className="tworows">
                            <div>{pokemon.moves} </div>
                            <div>Moves</div>
                    </div>
                </div>
                <div className="modal-description"> {pokemon.description}</div>
                <div className={`about ${pokemon.type}`}>base stats</div>
                <div className="modal-stats">
                    <div className="line">
                        <ul className={`about ${pokemon.type}`}>
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ul>
                    </div>
                    <div >
                        <ul>
                            <li>{pokemon.HP}</li>
                            <li>{pokemon.ATK}</li>
                            <li>{pokemon.DEF}</li>
                            <li>{pokemon.SATK}</li>
                            <li>{pokemon.SDEF}</li>
                            <li>{pokemon.SPD}</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>{pokemon.HP}</li>
                            <li>{pokemon.ATK}</li>
                            <li>{pokemon.DEF}</li>
                            <li>{pokemon.SATK}</li>
                            <li>{pokemon.SDEF}</li>
                            <li>{pokemon.SPD}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
    

export default Modal;