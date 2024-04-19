import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {

  return (
    <>
      <div id="box">
        <Header />
        <Home />
        <Catalog />
        <Details/>
        <Edit />
        <Login />
        <Register />
        </div>
    </>
  )
}

export default App
