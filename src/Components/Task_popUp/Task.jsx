import React from 'react'
import './Task.css'
import Modal from 'react-bootstrap/Modal';

export default function Task(props) {
  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Información preliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Cliente final</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input type="number" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Número de la cotización</label>
                </div>
            </div>
            <div style={{marginTop:'30px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <textarea style={{height:'100px'}} className='form-control' id="exampleFormControlTextarea1" rows="4" placeholder='Ingresa un corto comentario aquí'  ></textarea>
            </div>
            <div className='ButtonElement'>
                    <span className='ButtonText'>Agregar</span>
            </div>
            
        </Modal.Body>
    </Modal>
  )
}
