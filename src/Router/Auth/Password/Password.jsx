import React from 'react'
import './Password.css'
import Fondo from '../../../img/Fondo_1.jpg'
import { useNavigate } from 'react-router-dom'
import Preloader from '../../../Components/Preloader/Loading'
import Swal from 'sweetalert2'
import { changePassword } from '../../../services/Services'

export default function Password() {

  /* NAVIGATE */
  const navigate=useNavigate();

  /* use State */

  let [preloader,setPreloader] = React.useState(false);
  let [form,setForm] = React.useState({
    'password_1':'',
    'password_2':''
  })

  /* form */

  const readInput=(event,type)=>{
    console.log({...form,[type]:event.target.value})
    setForm({...form,[type]:event.target.value})
  }

  /* service */

  const changePassword_=async()=>{
    console.log(form)
    if(form.password_1 !== '' &&  form.password_2 !==''){

      setPreloader(true);
      let result =  undefined
      result =  await changePassword(form).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
          icon: 'info',
          title: 'Error al cambiar la contraseña'
        });
      })

      if(result){
        setPreloader(false);
        Swal.fire({
          icon: 'success',
          title: 'Contraseña cambiada con éxito'
        });
        console.log(result.data);
        navigate('/Login')
      }

    }else{

      Swal.fire({
        icon: 'info',
        title: 'Debes registrar todos los campos'
      });

    }

  }


  return (
    <div className='Body' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <div className='formContainer'>
          <form className='Form'>
              <div className='iconContainer'>
                <span className='textIcon'>R</span>
              </div>
              <p className='TitleLogin'>Digita tu antigua y nueva contraseña</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'password_1')} type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña antigua</label>
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'password_2')} type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña nueva</label>
                  </div>
              </div>
              <div onClick={changePassword_} className='ButtonElement'>
                      <span className='ButtonText'>Cambiar</span>
              </div>
              <span onClick={()=>navigate('/Login')} className='textLogin'>Volver</span>
          </form>
        </div>
    </div>
  )
}
