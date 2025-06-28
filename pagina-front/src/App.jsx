import { Routes, Route } from "react-router-dom"
import Registro from "./paginas/Registro"
import Login from "./paginas/Login"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )

}

export default App
