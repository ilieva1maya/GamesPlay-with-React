import Catalog from "./components/catalog/Catalog"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

function App() {

  return (
    <>
      <div id="box">
        <Header />
        <Home />
        <Catalog />
      </div>
    </>
  )
}

export default App
