
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/home';
import Navbar from './Componentes/Nav';






function App() {
  return (
     
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>

     <Route path="/" element={<Modal/>}/>


      
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/