import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import {useState, useEffect} from 'react'
import { AuthContext, initialize } from './context/AuthContext';
import logo from './logo.svg';
import './App.css';

import PantallaLogin from "./views/PantallaLogin";

function PantallaHome () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ingrese a Login para autenticarse o a Misdatos una vez autenticado
        </p>
        <NavLink to="/login" > Login </NavLink>
        <NavLink to="/private" > MisDatos </NavLink>
      </header>
    </div>
  )
}

function PantallaPrivada () {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" > Home </NavLink></li>
            <li><NavLink to="/login" > Login </NavLink></li>
          </ul>
        </nav>
      </header>
      <h1>Bienvenido a su pantalla de usuario</h1>
    </div>
  )
}


function App() {
  const [auth, setAuth] = useState(initialize());

  useEffect(() => {
    console.log(`Cambio auth: ${auth.auth}`)
  }, [auth])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path='/' element={<PantallaHome />} />
        <Route path='/login' element={<PantallaLogin />} />
        <Route path='/private' element={auth.auth? <PantallaPrivada />: <Navigate to="/login"/>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
