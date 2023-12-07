import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Pop_Up.css'

const Popup = ({ show, handleClose, handleLogout }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Opciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="danger" onClick={handleLogout}>Cerrar sesión</Button>
        <Button variant="primary" onClick={handleClose}>Volver</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;