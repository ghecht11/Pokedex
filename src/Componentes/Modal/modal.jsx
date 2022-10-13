import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Data from "./db.json"
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
const Example = () => {
  return <ProgressBar completed={10} />;
};


const Modal =()=>{
        const Pokemons=Data;
        const params = useParams()
        const [pokemon,setPokemon] = useState(Pokemons.pokemones.find((pokemon)=>pokemon.id===params.id));
        
        const [index, setIndex] = useState (Pokemons.pokemones.indexOf(pokemon))

        useEffect(()=>{
            setPokemon(Pokemons.pokemones.find((pokemon)=>pokemon.id===params.id))
        },[params.id])

        useEffect(()=>{
            setIndex(Pokemons.pokemones.indexOf(pokemon))
        },[pokemon])
        console.log(index)

    return(
        
        <>
        <div className={`Modal-grid ${pokemon.background}`}>
            <div className="modal-name"> 
                <div className="modal-1row">

                    <Link to={`/`} key={pokemon.id}>
                        <img src="./Imagenes/arrow-left.svg" className="white" alt="" />
                    </Link>

                    <div>{pokemon.name}</div>

                    <div className="marginNumber">
                        #{pokemon.id}
                    </div>
                </div>

              
                <div className="modal-2row">
                    {
                        index !==0 &&  (
                    <Link to={`/${Pokemons.pokemones[index-1].id}`} className="white arrow izq" > {/*Cambio de pagina al anterior pokemon */}
                        <img src="./Imagenes/frame.svg" className="arrow-right " alt=""/>
                    </Link>)}

                    <div className="div-poke-img img">  
                        <img src={pokemon.image} className="modal-poke-img" alt="" />
                    </div>
                    
                    {
                        index <(Pokemons.pokemones.length-1) && (
                    <Link to={`/${Pokemons.pokemones[index+1].id}`} className="white arrow der" > {/*Cambio de pagina al siguiente pokemon */}
                        <img src="./Imagenes/frame.svg"  alt="" />
                    </Link>)}
                </div>
            </div>
            
            <div className="modal-bottom">


                <div className={`modal-types ${pokemon.types}`}>
                    <span className={`modal-type ${pokemon.background}`}>{pokemon.type}</span>
                    <span className={`modal-type ${pokemon.background2}`}>{pokemon.type2}</span>
                </div>

                
                <div className={`bolder ${pokemon.type}`}> 
                    About
                </div>


                <div className="modal-info"> 
                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/Weight.svg" alt=""/></div>
                            <div >{pokemon.weight}</div>    
                        </div>
                        <div className="whm">Weight</div>
                    </div>

                    <div className="tworows line">
                        <div className="twocols">
                            <div><img src="/Imagenes/height.svg" alt=""/></div>
                            <div>{pokemon.height}</div>
                        </div>
                        <div className="whm">Height</div>
                    </div>

                    <div className="tworows">
                            <div>{pokemon.moves} </div>
                            <div className="whm">Moves</div>
                    </div>
                </div>
                <div className="modal-description "> {pokemon.description}</div>{/*DIV CON DESCRIPCION DEL POKEMON */}

                <div className={`bolder martop ${pokemon.type}`}>Base stats</div>{/*DIV CON TEXTO DE STATS*/}
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
                    <div className="centrado">
                        <ul>  {/*DIV CON LA INFO DE ESTADISTICAS DEL POKEMON*/}
                            <li>{pokemon.HP}</li>
                            <li>{pokemon.ATK}</li>
                            <li>{pokemon.DEF}</li>
                            <li>{pokemon.SATK}</li>
                            <li>{pokemon.SDEF}</li>
                            <li>{pokemon.SPD}</li>
                        </ul>
                    </div>
                    <div className="modal-range">  {/*DIV CON LAS STATS EN BARRAS DEL POKEMON */}
                        <ul >
                            <li><ProgressBar completed={pokemon.HP} maxCompleted={100} bgColor={pokemon.background}/></li>
                            <li><ProgressBar completed={pokemon.ATK} maxCompleted={100} bgColor={pokemon.color}/></li>
                            <li><ProgressBar completed={pokemon.DEF} maxCompleted={100} bgColor={pokemon.color}/></li>
                            <li><ProgressBar completed={pokemon.SATK} maxCompleted={100} bgColor={pokemon.color}/></li>
                            <li><ProgressBar completed={pokemon.SDEF} maxCompleted={100} bgColor={pokemon.color}/></li>
                            <li><ProgressBar completed={pokemon.SPD} maxCompleted={100} className={pokemon.color}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Modal;