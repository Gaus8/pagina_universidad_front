import { useState } from 'react'
import axios from 'axios'
import { FaLock} from "react-icons/fa";
import {Link} from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import '../assets/styles/registro.css';
function Login() {

  const url = 'http://localhost:3000/api'
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const enviarDatos = async (e) => {
    const { email, password } = data;
    e.preventDefault();
    if (!email || !password) {
      return window.alert("Todos los campos deben ser llenados")
    }
    try {
      const response = await axios.post(`${url}/login`, data)
      if (response.status === 200) {
       window.alert("EXITO AJAJ")
       localStorage.setItem('userEmail', '')
      }

    }
    catch (err) {

      const errores = err.response.data.error;
      console.log(errores);

      document.getElementById('error-email').textContent = '';
      document.getElementById('error-password').textContent = '';

      errores.forEach(e => {
        if (e.path.includes('name')) document.getElementById('error-name').textContent = e.message;
        if (e.path.includes('password')) document.getElementById('error-password').textContent = e.message;
      });

    }

  }
  return (
    <>
      <div className='body'>
        <main className='contenedor'>

          <section className='contenedor-texto'>
            <img src="/img/escudo_color.png" alt="Logo Universidad" />
            <h1>Proyectos de Gestion del Conocimiento</h1>
            <Link to={'/'} className='btn-cambio-ventana'>Registrarse</Link> 
          </section>

          <section className='contenedor-form'>
           <h2>Inicio de Sesión</h2>
            <form action="">
              <div className='contenedor-form-inputs'>
                <MdEmail className='logos' />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder='Correo Institucional'
                />
                <p id='error-email' className='errores'></p>
              </div>

              <div className='contenedor-form-inputs'>
                <FaLock className='logos' />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder='Contraseña' />
                <p id='error-password' className='errores'></p>
              </div>

              <button id="boton-login" type='submit' onClick={enviarDatos}>
                INICIAR SESION
              </button>

            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default Login;