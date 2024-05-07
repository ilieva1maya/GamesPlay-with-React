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
import AuthContext from "./contexts/authContext"
import * as authService from "./services/authService"

function App() {

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    
    const result = await authService.login(values.email, values.password)

    // струва ми се, че трябва да е същото, но не се получава, трябва да видя защо
    // const result = await authService.login(Object.values(values))

    console.log(result);
  }

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/login' element={<Login />} />
          {/* ако не подаваме през context, а през props */}
          {/* <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/catalog/:id' element={<Details />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
