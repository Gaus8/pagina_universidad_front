import '../../assets/styles/main.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaCircleUser,
  FaFileArrowUp,
  FaBars,
  FaRegCalendarMinus,
} from 'react-icons/fa6';
import { MdFindInPage } from 'react-icons/md';
import { SlDocs } from "react-icons/sl";
import { FaLongArrowAltLeft } from "react-icons/fa";
function MainPage() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bodyMain">
        {/* NAVBAR */}
        <nav className="nav-bar">
          <div className="logo-universidad">
            <button onClick={handleToggle}>
              {(toggle ?   <FaBars className="iconos" size={20}/>:<FaLongArrowAltLeft className="iconos" size={20}/>)}
            
            </button>
              <img
                src="/img/logo_universidad_completo.png"
                alt="Logo universidad"
              />
          
          </div>
          <div>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><FaCircleUser className="iconos" size={20} /></li>
            </ul>
          </div>
        </nav>

        {/* SIDEBAR */}
        <section
          className="sidebar"
          style={{ width: toggle ? '15%' : '4%' }}
        >
          <Link to={'/validacion'} className="contenedor-paginas">
            <div style={{ justifyContent: toggle ? 'flex-start' : 'center' }}>
              <FaFileArrowUp className="iconos" size={20}/>
              {toggle && <h3 className="texto-paginas">Enviar Proyecto</h3>}
            </div>
          </Link>

          <Link to={'/validacion'} className="contenedor-paginas">
            <div style={{ justifyContent: toggle ? 'flex-start' : 'center' }}>
              <MdFindInPage className="iconos" size={20}/>
              {toggle && <h3 className="texto-paginas">Consultar Nota</h3>}
            </div>
          </Link>

          <Link to={'/validacion'} className="contenedor-paginas">
            <div style={{ justifyContent: toggle ? 'flex-start' : 'center' }}>
              <FaRegCalendarMinus className="iconos" size={20}/>
              {toggle && <h3 className="texto-paginas">Fechas de Entrega</h3>}
            </div>
          </Link>

          <Link to={'/validacion'} className="contenedor-paginas">
            <div style={{ justifyContent: toggle ? 'flex-start' : 'center' }}>
              <SlDocs className="iconos" size={20}/>
              {toggle && <h3 className="texto-paginas">Formatos</h3>}
            </div>
          </Link>
        </section>
      </div>
    </>
  );
}

export default MainPage;
