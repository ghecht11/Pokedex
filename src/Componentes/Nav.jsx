import React from "react";
const Navbar =()=> {
    return(
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div className="nav-columns ">
                    <div className="centrado">
                        <img src="./Imagenes/Pokeball.png" alt="" className="nav-logo"/>
                    </div>

                    <div>Pokedéx</div>
                    
                    
                </div>
                
                <div className="nav-columns2">
                    <div className="hashtag centrado">#</div>
                    <div><img src="./Imagenes/Arrow.svg" alt=""  className="nav-filter"/></div>
                    
                    
                </div>
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}
            <input type="search" class="input" placeholder="Buscar" className="finder"/>
            
            


            </div>
        </div>
    )
}
export default Navbar;