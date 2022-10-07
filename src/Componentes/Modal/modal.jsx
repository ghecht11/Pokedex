import React from "react";
const Modal =()=>{
    return(
        <div className="Modal-grid">
            <div className="modal-name"> 
                <div className="modal-1row">
                    <div>
                        <img src="./Imagenes/arrow-left.svg" className="arrow-modal" alt=""/>
                    </div>

                    <div> Charmander</div>

                    <div>
                        <span>#004</span>
                    </div>
                </div>

                {/* Comienza el segundo div del contenedor de nombre */}
                <div className="modal-img">
                    <div className="white">
                        <img src="./Imagenes/arrow-left.svg" alt=""/>
                    </div>

                    <div>
                        <img src="/Imagenes/charmander.png" alt=""/>
                    </div>

                    <div className="white arrow-right">
                        <img src="./Imagenes/arrow-left.svg" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="modal-bottom">
                <div className="modal-type">
                    <span>Fire</span>
                </div>
                
                <div> about</div>
                <div> peso y esas cosas</div>
                <div> descripcion</div>
                <div>base stats</div>
                <div>stats</div>
            </div>
        </div>
    )
}
export default Modal;