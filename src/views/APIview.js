import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import {TodosAPI} from '../api/TodosAPI'
import {updateToken} from '../api/client'

const APIview = ({setAuth}) => {
  const [data, setData] = useState("CARGANDO...")

  let navigate = useNavigate();

  useEffect(() => {
    console.log(`Entré a /login`)
  }, [])

  const download = async () => {

    TodosAPI.getAll().then((data) => {
      setData(JSON.stringify(data))
      sessionStorage.setItem('isAuthenticated', 'true');
      setAuth(true);
      // navigate("/private");

    });

    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const json = await response.json()
    // setData(JSON.stringify(json))
  }

  const update = () => {
    updateToken("456")
  }

  const handleLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setAuth(true);
    navigate("/private");
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setAuth(false);
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

export default APIview