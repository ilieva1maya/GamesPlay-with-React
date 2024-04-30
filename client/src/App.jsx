import { useState } from "react"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Routes, Route } from "react-router-dom"

function App() {

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values)=> {
    console.log(values)
  }

  return (
    <>
      <div id="box">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog/:id' element={<Details />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
