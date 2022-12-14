import React, { useEffect } from "react";


const Navbar =(props)=> {

    return(

      
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div className="nav-columns ">
                    <div className="centrado">
                        <img src="./Imagenes/Pokeballblack.png" alt="" className="nav-logo"/>
                    </div>

                    <div>Pokedéx</div>
                    
                    
                </div>
                
                <div className="nav-columns2">
                    <div className="hashtag centrado" onClick={()=>props.changeOrder()}>{props.orderByNumber ? '#' : 'AZ'} </div>
                    <div><img src="./Imagenes/Arrow.svg" alt=""  className="nav-filter"/></div>
                </div>

                
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}
            <input type="search" placeholder="Buscar" className="finder" onChange={(e)=>props.setInputSearch(e.target.value)}/>

            </div>
        </div>
    )
}
export default Navbar;