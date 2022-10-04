import React from "react";
const Navbar =()=> {
    return(
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div className="nav-columns">
                    <img src="./Imagenes/Pokeball.png" alt="" className="nav-logo"/>
                    <p>Pokedéx</p>
                </div>
                
                <div className="hashtag">
                    #
                    <img src="./Imagenes/Arrow.svg" alt=""  className="nav-filter"/>
                </div>
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}

            </div>
        </div>
    )
}
export default Navbar;