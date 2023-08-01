import {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import {TodosAPI} from '../api/TodosAPI'
import {updateToken} from '../api/client'

const PantallaLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const [data, setData] = useState("CARGANDO...")

  let navigate = useNavigate();

  useEffect(() => {
    console.log(`Entré a /login`)
  }, [])

  const download = async () => {

    TodosAPI.getAll().then((data) => {
      setData(JSON.stringify(data))

    });

  }

  const update = () => {
    updateToken("456")
  }

  const handleLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setAuth({auth: true});
    navigate("/private");
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setAuth({auth: false});
    navigate("/login");
  };

  return (
    <>
      <div>
        <button onClick={download}>DOWNLOAD</button>
        <button onClick={update}>UPDATE TOKEN</button>
      </div>
      <div>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      {data}
    </>
  )
}

export default PantallaLogin