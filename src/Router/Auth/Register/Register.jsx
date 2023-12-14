import React from 'react'
import './Register.css'
import Fondo from '../../../img/Fondo_1.jpg'
import { useNavigate } from 'react-router-dom'
import Preloader from '../../../Components/Preloader/Loading'
import Swal from 'sweetalert2'
import { LoginService, RegisterService } from '../../../services/Services'


export default function Register() {
  /* NAVIGATE */
  const navigate=useNavigate();


  /* use State */

  let [preloader,setPreloader] = React.useState(false);
  let [user,setUser] = React.useState({
    'username':'',
    'first_name':'',
    'password':'',
    'email':'',
  })

  /* form */

  const readInput=(event,type)=>{
    setUser({...user,[type]:event.target.value})
  }

  

  

  const submit =async()=>{

      // VALIDAMOS SI ESTAN TODOS LOS CAMPOS
        if(user.username !== '' && user.password !=='' && user.first_name !=='' && user.email !==''){
        setPreloader(true);
        let result =  undefined
        result =  await RegisterService(user).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Error al completar el registro verifica que tu información este completa.'
          });
        })

          if(result){
            setPreloader(false);
            Swal.fire({
              icon: 'success',
              title: 'Registro completado con éxito.'
            }).then(result => {
              if (result.isConfirmed) {
                console.log(result.data);
                navigate('/Login')
              }});
          }
        }else{
          Swal.fire({
            icon: 'info',
            title: 'Debes registrar todos los campos'
          });
        }
  }

  return (
    <>
      {preloader===true ? <Preloader></Preloader> : <></>}
      <div className='Body' style={{backgroundImage: `url(${Fondo})`,backgroundSize:'cover'}}>
        
        <div className='formContainer'>
          <form className='Form'>
              <div className='iconContainer'>
                <span className='textIcon'>R</span>
              </div>
              <p className='TitleLogin'>Completa la información para completar el registro</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'username')} type="text" className='form-control' id='user' placeholder="Usuario" />
                          <label className='fs-5- ff-monse-regular-'>Nombre de usuario</label>
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'first_name')} type="text" className='form-control' id='user' placeholder="Usuario" />
                          <label className='fs-5- ff-monse-regular-'>Nombre completo</label>
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'email')} type="email" className='form-control' id='user' placeholder="Usuario" />
                          <label className='fs-5- ff-monse-regular-'>Correo</label>
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'password')} type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña</label>
                  </div>
              </div>
              <div className='ButtonElement'>
                      <span onClick={()=>submit()} className='ButtonText'>Registrarse</span>
              </div>
          </form>
        </div>
    </div>
    </>
  )
}
