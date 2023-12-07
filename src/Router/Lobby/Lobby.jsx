import React from 'react'
import './Lobby.css'
import { useNavigate } from 'react-router-dom'
import Fondo from '../../img/Fondo_6.jpg'
import Icon from '../../Components/Svg/Logo/Logo'
import Product from '../../img/product.png'
import Security from '../../Components/Svg/Security/Security'
import Airplane from '../../Components/Svg/Airplane/Airplane'
import Mirror from '../../img/background.png'
import Swal from 'sweetalert2'
import Logo_team from '../../img/Logo_team.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Lobby() {
  /* NAVIGATE */
  const navigate=useNavigate();

  const disabledModule = () =>{
    Swal.fire({
        icon: 'info',
        title: 'Módulo aún en desarrollo, pronto estará disponible'
    });
  }

  const seeDropDown=()=>{
    document.getElementById('nav-dropdown-dark-example').click();
  }

  const  Lobby=()=>{
    navigate('/Lobby')
  }

  const  LogOut=()=>{
    navigate('/Login')
  }


  return (
    <div className='Body_2' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
          <div className='Navbar_2'>
              <div onClick={seeDropDown} className='nameContainer dropdown-toggle d-flex flex-row justify-content-center align-items-center align-self-center'>
                  <span className='nameNavbar font_medium'>
                  Juan Sebastian Mendez
                  </span>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title=""
                    menuVariant="dark"
                  >
                    <NavDropdown.Item onClick={LogOut}>Cerrar Sesión</NavDropdown.Item>
                  </NavDropdown>
              </div>
          </div>
          <div className='logoContainer'>
              <Icon></Icon>
          </div>
          <div className='ItemContainer'>
                <div className='contentContainer_1'>
                  <p className='TitleContainer font_medium'>
                  Líder mundial en <span className='blue'>productos</span> y <span className='blue'>soluciones</span> de <span>control</span> de <span>seguridad.</span>
                  </p>
                  <p className='infoContainer font_Light'>
                  La compañía se ha distinguido por su innovación constante y su compromiso inquebrantable con la calidad. Sus productos son reconocidos a nivel global por su eficiencia, fiabilidad y capacidad para adaptarse a las necesidades cambiantes del mercado.
                  </p>
                </div>
                <div className='ImageContainer'>
                  <Security width={280} height={280}></Security>
                </div>
          </div>
          <div className='ItemContainer'>
                <div className='ImageContainer'>
                  <Airplane width={280} height={280}></Airplane>
                </div>
                <div className='contentContainer_2'>
                  <p className='TitleContainer font_medium'>
                  Estamos <span className='blue'>preparados</span> para las <span className='blue'>necesidades</span> actuales de control de seguridad de la <span className='blue'>aviación</span>
                  </p>
                  <p className='infoContainer font_Light'>
                  Como empresa, nos aseguramos de que nuestra gente, nuestros productos de inspección de equipaje y carga evolucionen con el entorno cambiante.
                  </p>
                </div>
          </div>
          <div className='itemsContent'>
              <div className='item'></div>
              <div className='item'></div>
              <div className='item'></div>
          </div>
          <div className='ModulesTitle'>
              <p className='textModules font_medium'>
                Módulos
              </p>
          </div>
          <div className='Container'>
              <div className='moduleContainer'>
                      <div className='module_active' onClick={()=>navigate('/Kanban')}>
                          <img className='imgModule' width={450} height={450} src={Logo_team}></img>
                      </div>
                      <div className='module' onClick={disabledModule}>
                          <img style={{position:'absolute'}} src={Mirror}></img>
                          <p className='textModule font_medium'>En desarrollo</p>
                      </div>
                      <div className='module' onClick={disabledModule}>
                          <img style={{position:'absolute'}} src={Mirror}></img>
                          <p className='textModule font_medium'>En desarrollo</p>
                      </div>
              </div>
          </div>
          <div className='Container'>
              <div className='moduleContainer'>
                      <div className='module' onClick={disabledModule}>
                          <img style={{position:'absolute'}} src={Mirror}></img>
                          <p className='textModule font_medium'>En desarrollo</p>
                      </div>
                      <div className='module' onClick={disabledModule}>
                          <img style={{position:'absolute'}} src={Mirror}></img>
                          <p className='textModule font_medium'>En desarrollo</p>
                      </div>
                      <div className='module' onClick={disabledModule}>
                          <img style={{position:'absolute'}} src={Mirror}></img>
                          <p className='textModule font_medium'>En desarrollo</p>
                      </div>
              </div>
          </div>
          
    </div>
  )
}
