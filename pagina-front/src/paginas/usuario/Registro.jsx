import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaLock, FaUser } from "react-icons/fa";
import '../../assets/styles/registro.css';
import { MdEmail } from "react-icons/md";

function Registro() {

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
        localStorage.setItem('userEmail', data.email);
        window.location.href = "/validacion";
      }
    }
    catch (err) {

      const errores = err.response.data.error;
      console.log(errores);
      const errorName = document.getElementById('error-name');
      const errorEmail = document.getElementById('error-email');
      const errorPassword = document.getElementById('error-password');

      errorName.style.display = 'block';
      errorEmail.style.display = 'block';
      errorPassword.style.display = 'block';

      errorName.textContent = '';
      errorEmail.textContent = '';
      errorPassword.textContent = '';
   

      errores.forEach(e => {
        if (e.path.includes('name')) document.getElementById('error-name').textContent = e.message;
        if (e.path.includes('email')) document.getElementById('error-email').textContent = e.message;
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
            <Link to={'/login'} className='btn-cambio-ventana'> Iniciar Sesión</Link>
          </section>

          <section className='contenedor-form'>
            <h2>Registro</h2>
            <form action="">

              <div className='contenedor-form-inputs'>
                <FaUser className='logos' />
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder='Nombre Usuario'
                />
              </div>
              <p id='error-name' className='errores'></p>
              <div className='contenedor-form-inputs'>
                <MdEmail className='logos' />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder='Correo Institucional'
                />

              </div>
              <p id='error-email' className='errores'></p>

              <div className='contenedor-form-inputs'>
                <FaLock className='logos' />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder='Contraseña' />
              </div>
              <p id='error-password' className='errores'></p>

              <button id="boton-registro" type='submit' onClick={enviarDatos}>
                REGISTRARSE
              </button>

            </form>
          </section>



        </main>

      </div>

    </>
  )
}

export default Registro;