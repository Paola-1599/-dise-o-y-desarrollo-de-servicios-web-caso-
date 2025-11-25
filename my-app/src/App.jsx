import "./App.css";
import Login from "./componentes/Login.jsx";
import Logeado from "./componentes/Logeado.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />}/>
      <Route path="/logeado"  element={<Logeado />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
