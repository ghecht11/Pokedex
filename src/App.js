
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/home';
import Modal from './Componentes/Modal/modal';







function App() {
  return (
     
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>

     <Route path="/modal" element={<Modal/>}/>


      
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/