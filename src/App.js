import { BrowserRouter, Route, Routes } from "react-router-dom"
import CrudApi from "./componente/CrudApi"
import Login from "./componente/Login"
import Navbar from "./componente/Navbar"
import Formulario from "./componente/Formulario"




const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/crudapi" element={<CrudApi/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
