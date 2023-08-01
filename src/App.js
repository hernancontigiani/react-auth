import { Route, Routes, Navigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

import APIview from "./views/APIview";

function PantallaHome () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
      {/* <Route path='/json' element={<APIview setAuthHook={(auth) => setAuth(auth)} />} /> */}
      <Route path='/login' element={<APIview setAuth={setAuth} />} />
      <Route path='/private' element={auth? <PantallaHome />: <Navigate to="/login"/>} />
    </Routes>
  );
}

export default App;
