import React from 'react'
import Fondo from '../../../img/Fondo_1.jpg'
import './Change.css'
import { useNavigate } from 'react-router-dom'

export default function Change() {

  /* NAVIGATE */
  const navigate=useNavigate();


  return (
    <div className='Body' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
        <div className='formContainer'>
          <form className='Form'>
              <div className='iconContainer'>
                <span className='textIcon'>R</span>
              </div>
              <p className='TitleLogin'>Digita tu nueva contraseña</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña nueva</label>
                          {/* <i className='fa F fs-xs'></i> */}
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Repite la contraseña</label>
                          {/* <i className='fa F fs-xs'></i> */}
                  </div>
              </div>
              <div className='ButtonElement'>
                      <span className='ButtonText'>Cambiar</span>
              </div>
              <span onClick={()=>navigate('/Login')} className='textLogin'>Volver</span>
          </form>
        </div>
    </div>
  )
}
