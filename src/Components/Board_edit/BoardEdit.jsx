import React from 'react'
import './BoardEdit.css'
import Modal from 'react-bootstrap/Modal';

export default function BoardEdit(props) {
  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Editar tablero</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Nombre tablero</label>
                </div>
            </div>
            <div className='ButtonElement'>
                    <span className='ButtonText'>Actualizar</span>
            </div>
        </Modal.Body>
    </Modal>
  )
}
