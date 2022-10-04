import React from "react";
const Navbar =()=> {
    return(
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div>
                    <img src="./Imagenes/Pokeball.png" alt="" className="Nav-logo"/>
                    </div>
                <div>
                    #
                    <img src="./Imagenes/Arrow.svg" alt="" />
                    </div>
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}

            </div>
        </div>
    )
}
export default Navbar;