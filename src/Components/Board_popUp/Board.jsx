import React from 'react'
import './Board.css'
import Modal from 'react-bootstrap/Modal';

export default function Board(props) {
  return (
    <Modal  show={props?.show} onHide={props?.handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className='font_medium titleModal white'>Tablero nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body className='font_Light white bodyContainer_modal'>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Nombre tablero</label>
                </div>
            </div>
            <div className='ButtonElement'>
                    <span className='ButtonText'>Agregar</span>
            </div>
        </Modal.Body>
    </Modal>
  )
}
