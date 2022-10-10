
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/Home';
import Modal from './Componentes/Modal/modal';


function App() {

  const [list, SetList] = useState([]); 
  const [order, SetOrder] = useState("id");

  useEffect(()=>){
      let auxList = list
      

  }



  return (
     
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Modal/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;


/* 
filter
Modal del pokemon
ruteo*/