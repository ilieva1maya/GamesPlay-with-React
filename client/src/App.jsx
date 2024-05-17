import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Register from "./components/register/Register"
import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/authContext"
import Path from "./paths"

function App() {
  return (
    <AuthProvider>
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
          <Route path={Path.Register} element={<Register />} />          
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
