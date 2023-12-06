import React from 'react'
import './Login.css'
import Fondo from '../../../img/Fondo_1.jpg'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  /* NAVIGATE */
  const navigate=useNavigate();


  return (
    <div className='Body' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
        <div className='formContainer'>
          <form className='Form'>
              <div className='iconContainer'>
                <span className='textIcon'>R</span>
              </div>
              <p className='TitleLogin'>Digita tus credenciales para continuar</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input type="text" className='form-control' id='user' placeholder="Usuario" />
                          <label className='fs-5- ff-monse-regular-'>Usuario</label>
                          {/* <i className='fa F fs-xs'></i> */}
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña</label>
                          {/* <i className='fa F fs-xs'></i> */}
                  </div>
              </div>
              <div className='ButtonElement'>
                      <span onClick={()=>navigate('/Lobby')} className='ButtonText'>Inicia sesión</span>
              </div>
              <span onClick={()=>navigate('/Password')} className='textLogin'>Cambiar contraseña</span>
              <span onClick={()=>navigate('/Recovery')} className='textLogin'>Recuperar contraseña</span>
          </form>
        </div>
    </div>
  )
}
