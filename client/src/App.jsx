import { useState } from "react"
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Routes, Route, useNavigate } from "react-router-dom"
import AuthContext from "./contexts/authContext"
import * as authService from "./services/authService"
import Path from "./paths"
import Logout from "./components/logout/Logout"

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    // струва ми се, че трябва да е същото, но не се получава, трябва да видя защо
    // const result = await authService.login(Object.values(values))

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalog} element={<Catalog />} />
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.Details} element={<Details />} />
          <Route path={Path.Edit} element={<Edit />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          {/* ако не подаваме през context, а през props */}
          {/* <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} /> */}
          <Route path={Path.Register} element={<Register />} />
          <Route path='/catalog/:id' element={<Details />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
