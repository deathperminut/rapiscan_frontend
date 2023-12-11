import React from 'react'
import './Login.css'
import Fondo from '../../../img/Fondo_1.jpg'
import { useNavigate } from 'react-router-dom'
import Preloader from '../../../Components/Preloader/Loading'
import Swal from 'sweetalert2'
import { AppContext } from '../../../Context'
import { LoginService } from '../../../services/Services'

export default function Login() {
  /* NAVIGATE */
  const navigate=useNavigate();

  /* app context */

  let {userData,setUserData} = React.useContext(AppContext);

  /* use State */

  let [preloader,setPreloader] = React.useState(false);
  let [user,setUser] = React.useState({
    'user':'',
    'password':''
  })

  /* form */

  const readInput=(event,type)=>{
    setUser({...user,[type]:event.target.value})
  }

  

  

  const submit =async()=>{

      // VALIDAMOS SI ESTAN TODOS LOS CAMPOS
      if(user.user !== '' && user.password !==''){
        setPreloader(true);
        let result =  undefined
        result =  await LoginService(user).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Error al iniciar sesión verifica las credenciales.'
          });
        })

        if(result){
          setPreloader(false);
          console.log(result.data);
          setUserData(result.data);
          navigate('/Lobby')
          
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
              <p className='TitleLogin'>Digita tus credenciales para continuar</p>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'user')} type="text" className='form-control' id='user' placeholder="Usuario" />
                          <label className='fs-5- ff-monse-regular-'>Usuario</label>
                  </div>
              </div>
              <div className='inputContainer'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readInput(event,'password')} type="password" className='form-control' id='user' placeholder="Contraseña" />
                          <label className='fs-5- ff-monse-regular-'>Contraseña</label>
                  </div>
              </div>
              <div className='ButtonElement'>
                      <span onClick={()=>submit()} className='ButtonText'>Inicia sesión</span>
              </div>
              <span onClick={()=>navigate('/Password')} className='textLogin'>Cambiar contraseña</span>
              <span onClick={()=>navigate('/Recovery')} className='textLogin'>Recuperar contraseña</span>
          </form>
        </div>
    </div>
    </>
    
  )
}
