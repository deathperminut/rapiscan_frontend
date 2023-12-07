import React from 'react'
import './Kanban.css'
import Icon from '../../../Components/Svg/Logo/Logo'
import Popup from '../../../Components/Pop_Up/Pop_Up'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


export default function Kanban() {
  /* navigate */
  const navigate=useNavigate();

  /* pop up */
  
  
  const seeDropDown=()=>{
    document.getElementById('nav-dropdown-dark-example').click();
  }

  const  Lobby=()=>{
    navigate('/Lobby')
  }

  const  LogOut=()=>{
    navigate('/Login')
  }


  return (
    <>
    <div className='Body_3'>
          <div className='Navbar'>
              <div className='iconContainer_2'>
                <span className='textIcon_2'>R</span>
              </div>
              <div onClick={seeDropDown} className='nameContainer dropdown-toggle d-flex flex-row justify-content-center align-items-center align-self-center'>
                  <span className='nameNavbar font_medium'>
                  Juan Sebastian Mendez
                  </span>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title=""
                    menuVariant="dark"
                  >
                    <NavDropdown.Item onClick={Lobby}>Lobby</NavDropdown.Item>
                    <NavDropdown.Item onClick={LogOut}>Cerrar Sesión</NavDropdown.Item>
                    
                  </NavDropdown>
              </div>
          </div>
    </div>  
    </>
    
  )
}
