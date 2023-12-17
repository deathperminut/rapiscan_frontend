import React from 'react'
import './Task.css'
import Modal from 'react-bootstrap/Modal';
import Preloader from '../Preloader/Loading';
import { AppContext } from '../../Context';
import Swal from 'sweetalert2';
import { createOrder } from '../../services/Services';

export default function Task(props) {

  // appContext
  let {token,board} = React.useContext(AppContext);

  // useStates
  let [data,setData] = React.useState({
    'quotation_number':'',
    'state':'',
    'po_code':'',
    'final_client':'',
    'sales_entity_code':'',
    'country':'',
    'distributor':'',
    'notes':'',
  })

  let [file,setFile] = React.useState(null);

  // READ USE STATE

  let readInputs=(event,type)=>{
    
    setData({...data,[type]:event.target.value})
    
  }

  let readFile=(event)=>{
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }
  


  // functions

  let [preloader,setPreloader] = React.useState(false);
  
  
  const newOrder=async()=>{

    if(data.sales_entity_code!=='' && data.quotation_number!=='' && data.po_code!=='' && data.notes!=='' && data.final_client!=='' && data.distributor!=='' && data.country!==''){

      if(file !== null){

        setPreloader(true);
        let result  =  undefined;
        result = await createOrder({...data,['state']:board?.id},file,token).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Error al crear orden.'
          });
        })

        if(result){
          console.log(result.data);
          setPreloader(false);
          Swal.fire({
            icon: 'success',
            title: 'Orden creada con éxito.'
          });
          props.getData(false);
          props?.handleClose();
        }

      }else{
        Swal.fire({
          icon: 'info',
          title: 'Adjunta el archivo de soporte para continuar.'
        });
      }

    }else{
      
      Swal.fire({
        icon: 'info',
        title: 'Todos los campos son obligatorios'
      });
      
    }

  }



  
  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Datos de la orden</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'quotation_number')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Número de cotización</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'po_code')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Código PO</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'final_client')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Cliente final</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'sales_entity_code')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Código de entidad de venta</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'country')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>País</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'distributor')} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Distribuidor</label>
                </div>
            </div>
            <div style={{marginTop:'30px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <textarea onChange={(event)=>readInputs(event,'notes')} style={{height:'100px'}} className='form-control' id="exampleFormControlTextarea1" rows="4" placeholder='Ingresa un corto comentario aquí'  ></textarea>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readFile(event)} type="file" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Anexo</label>
                </div>
            </div>

            <div onClick={()=>newOrder()} className='ButtonElement'>
                    <span className='ButtonText'>Crear</span>
            </div>
            
        </Modal.Body>
    </Modal>
  )
}
