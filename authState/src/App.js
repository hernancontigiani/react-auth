import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import {useState, useEffect} from 'react'
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

function initializeAuthentication() {
  const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated');
  console.log(`storedIsAuthenticated: ${storedIsAuthenticated}`)
  return !!storedIsAuthenticated;
}

function App() {
  const [auth, setAuth] = useState(initializeAuthentication());

  useEffect(() => {
    console.log(`Cambio auth: ${auth}`)
  }, [auth])

  return (
    <Routes>
      <Route path='/' element={<PantallaHome />} />
      <Route path='/login' element={<PantallaLogin setAuth={setAuth} />} />
      <Route path='/private' element={auth? <PantallaPrivada />: <Navigate to="/login"/>} />
    </Routes>
  );
}

export default App;
