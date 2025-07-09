import { Routes, Route } from "react-router-dom"
import Registro from "./paginas/Registro"
import Login from "./paginas/Login"
import Validacion from "./paginas/Validacion"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path='/validacion' element={<Validacion />} />
    </Routes>
  )

}

export default App
