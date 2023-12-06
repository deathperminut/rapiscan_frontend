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


export default function Lobby() {
  /* NAVIGATE */
  const navigate=useNavigate();

  const disabledModule = () =>{
    Swal.fire({
        icon: 'info',
        title: 'Módulo aún en desarrollo, pronto estará disponible'
    });
  }


  return (
    <div className='Body_2' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
          <div className='logoContainer'>
              <Icon></Icon>
          </div>
          <div className='ItemContainer'>
                <div className='contentContainer'>
                  <p className='TitleContainer font_medium'>
                  Líder mundial en <span className='blue'>productos</span> y <span className='blue'>soluciones</span> de <span>control</span> de <span>seguridad.</span>
                  </p>
                  <p className='infoContainer font_Light'>
                  La compañía se ha distinguido por su innovación constante y su compromiso inquebrantable con la calidad. Sus productos son reconocidos a nivel global por su eficiencia, fiabilidad y capacidad para adaptarse a las necesidades cambiantes del mercado.
                  </p>
                </div>
                <div className='ImageContainer'>
                  <Security width={340} height={340}></Security>
                </div>
          </div>
          <div className='ItemContainer'>
                <div className='ImageContainer'>
                  <Airplane width={340} height={340}></Airplane>
                </div>
                <div className='contentContainer'>
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
