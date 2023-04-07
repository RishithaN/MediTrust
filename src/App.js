import './App.css';
import Prescrip from './prescrip';
import Home from './home';
import Login from './login';
import Signup from './signup';
import User from './user';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prescrip" element={<Prescrip />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );


  
}

export default App;