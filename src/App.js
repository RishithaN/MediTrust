import './App.css';
import Prescrip from './prescrip';
import Home from './home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <BrowserRouter>
      <Routes>
          
          <Route path="/prescrip" element={<Prescrip />} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );


  
}

export default App;