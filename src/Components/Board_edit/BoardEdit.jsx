import React from 'react'
import './BoardEdit.css'
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../Context';
import Preloader from '../Preloader/Loading';
import { editBoard } from '../../services/Services';
import Swal from 'sweetalert2';

export default function BoardEdit(props) {


  let {boards,token,board,setBoard} = React.useContext(AppContext)

  let [data,setData] = React.useState({
    title:'',
    description:'',
    index:'',
  })

  React.useEffect(()=>{


    setData(board);

  },[board])

  // states

  let [preloader,setPreloader] = React.useState(false);

  //funciones

  let readInputs=(event,type)=>{
    
    setData({...data,[type]:event.target.value})
    
  }


  let updateBoard=async()=>{

    let result =  undefined;
    setPreloader(true);
    result  = await editBoard(data,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas para actualizar el tablero'
      });
    })

    if(result){

      setPreloader(false);
      console.log(result.data);
      props?.handleClose();
      props?.getData(false);
      Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito.'
      });



    }

    

   }
  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Editar tablero</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input value={data?.title} onChange={(event)=>readInputs(event,'title')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Nombre tablero</label>
                </div>
            </div>
            <div style={{marginTop:'30px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <textarea value={data?.description} onChange={(event)=>readInputs(event,'description')} style={{height:'100px'}} className='form-control' id="exampleFormControlTextarea1" rows="4" placeholder='Ingresa una corta descripción aquí'  ></textarea>
            </div>
            <div onClick={updateBoard} className='ButtonElement'>
                    <span className='ButtonText'>Actualizar</span>
            </div>
        </Modal.Body>
    </Modal>
  )
}
