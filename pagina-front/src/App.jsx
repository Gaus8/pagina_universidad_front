import { Routes, Route } from "react-router-dom"
import Registro from "./paginas/usuario/Registro"
import Login from "./paginas/usuario/Login"
import Validacion from "./paginas/usuario/Validacion"
import MainPage from "./paginas/dashboard/MainPage"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path='/validacion' element={<Validacion />} />
      <Route path='/main_page' element={<MainPage />} />
    </Routes>
  )

}

export default App
