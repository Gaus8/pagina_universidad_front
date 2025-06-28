import { useState } from 'react'
import axios from 'axios'
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Registro (){

   const url = 'http://localhost:3000/api'
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const enviarDatos = async (e) => {
    const { name, email, password } = data;
    e.preventDefault();
    if (!name || !email || !password) {
      return window.alert("Todos los campos deben ser llenados")
    }
    try {
      const response = await axios.post(`${url}/registro`, data)
      if (response.status === 201) {
        console.log("exito en el registro")
      }

    }
    catch (err) {

      const errores = err.response.data.error; 
      console.log(errores);
      
      document.getElementById('error-name').textContent = '';
      document.getElementById('error-email').textContent = '';
      document.getElementById('error-password').textContent = '';

      errores.forEach(e => {
        if (e.path.includes('name')) document.getElementById('error-name').textContent = e.message;
        if (e.path.includes('email')) document.getElementById('error-email').textContent = e.message;
        if (e.path.includes('password')) document.getElementById('error-password').textContent = e.message;
      });
      
    }

  }
  return (
    <>
      <main className='contenedor'>

        <div className='contenedor-form'>

          <form action="">

            <div className='contenedor-inputs'>
              <FaUser className='logos' />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder='Nombre Usuario'
              />
              <p id='error-name' className='errores'></p>
            </div>

            <div className='contenedor-inputs'>
              <FaLock className='logos' />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder='Email Institucional'
              />
              <p id='error-email' className='errores'></p>
            </div>

            <div className='contenedor-inputs'>
              <MdEmail className='logos' />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder='Contraseña' />
              <p id='error-password' className='errores'></p>
            </div>

            <button type='submit' onClick={enviarDatos}>
              REGISTRARSE
            </button>

          </form>
        </div>
      </main>

    </>
  )
}

export default Registro;