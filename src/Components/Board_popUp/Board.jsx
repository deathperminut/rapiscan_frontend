import React from 'react'
import './Board.css'
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../Context';
import { createBoard } from '../../services/Services';
import Swal from 'sweetalert2';
import Preloader from '../Preloader/Loading';

export default function Board(props) {

  /* appContext */

  let {boards,token} = React.useContext(AppContext)

  let [data,setData] = React.useState({
    'title':'',
    'description':'',
    'index':'',
  })

  // states

  let [preloader,setPreloader] = React.useState(false);

  //funciones

  let readInputs=(event,type)=>{
    
    setData({...data,[type]:event.target.value})
    
  }

  // createboard

  const appendBoard=async()=>{

    if(data.title!=='' && data.description!==''){

    let result = undefined
    setPreloader(true);
    result =  createBoard({...data,['index']:boards.length+1},token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas para crear el tablero'
      });
    })

    if(result){
      console.log(result.data);
      setPreloader(false);
      
      Swal.fire({
        icon: 'success',
        title: 'Tablero creado con éxito.'
      }).then((data)=>{
        if(data.isConfirmed){
          props?.handleClose();
          props?.getData(false);
        }
      });
    }

    }else{

      Swal.fire({
        icon: 'info',
        title: 'Debe completar el campo de nombre y descripción.'
      });

    }

    

  }


  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Tablero nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'title')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Nombre tablero</label>
                </div>
            </div>
            <div style={{marginTop:'30px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <textarea onChange={(event)=>readInputs(event,'description')} style={{height:'100px'}} className='form-control' id="exampleFormControlTextarea1" rows="4" placeholder='Ingresa una corta descripción aquí'  ></textarea>
            </div>
            <div onClick={appendBoard} className='ButtonElement'>
                    <span className='ButtonText'>Agregar</span>
            </div>
        </Modal.Body>
    </Modal>
  )
}
