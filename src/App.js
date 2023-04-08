import './App.css';
import Prescrip from './prescrip';
import Home from './home';
import Login from './login';
import Signup from './signup';
import User from './user';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Retailer from './retailer';
import Manufacturer from './manufacturer';
import Navbar from './navbar';

function App() {

  return(
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prescrip" element={<Prescrip />} />
          <Route path="/user" element={<User />} />
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );


  
}

export default App;