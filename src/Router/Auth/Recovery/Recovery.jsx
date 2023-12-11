import React from 'react'
import './Recovery.css'
import Fondo from '../../../img/Fondo_1.jpg'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Preloader from '../../../Components/Preloader/Loading'



export default function Recovery() {
  /* NAVIGATE */
  const navigate=useNavigate();

  /* use State */
  let [preloader,setPreloader] = React.useState(false);

  /* form */

  let [form,setForm] = React.useState({
    'email':'',
  })

  /* form */

  const readInput=(event,type)=>{
    setForm({...form,[type]:event.target.value})
  }

  

  return (
    <div className='Body' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <div className='formContainer'>
          <form className='Form'>
              <div className='iconContainer'>
                <span className='textIcon'>R</span>
              </div>
              <p className='TitleLogin'>Digita tu correo para recuperar tu contraseña</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'email')} type="email" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Correo electrónico</label>
                  </div>
              </div>
              <div className='ButtonElement'>
                      <span className='ButtonText'>Recuperar</span>
              </div>
              <span onClick={()=>navigate('/Login')} className='textLogin'>Volver</span>
          </form>
        </div>
    </div>
  )
}
