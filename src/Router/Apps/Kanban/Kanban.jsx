import React from 'react'
import './Kanban.css'
import Icon from '../../../Components/Svg/Logo/Logo'
import Popup from '../../../Components/Pop_Up/Pop_Up'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Swiper from 'swiper';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiPlusOutline } from "react-icons/ti";
import Board from '../../../Components/Board_popUp/Board';
import BoardEdit from '../../../Components/Board_edit/BoardEdit';
import Task from '../../../Components/Task_popUp/Task';
import Offcanvas_task from '../../../Components/Offcanvas/Offcanvas';


export default function KanBan() {

  React.useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      // Configuración de Swiper
      slidesPerView: 'auto', // Número de slides visibles
      spaceBetween: 20, // Espacio entre slides
      // Otras configuraciones aquí...
    });

    return () => {
      // Limpiar Swiper al desmontar el componente
      mySwiper.destroy(true, true);
    };
  }, []);


  /* navigate */
  const navigate=useNavigate();

  /* pop up New Board */
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* pop up Edit Board */
  const [show_2, setShow_2] = React.useState(false);
  const handleClose_2 = () => setShow_2(false);
  const handleShow_2 = () => setShow_2(true);

  /* pop up New Task */
  const [show_3, setShow_3] = React.useState(false);

  const handleClose_3 = () => setShow_3(false);
  const handleShow_3 = () => setShow_3(true);

  /* off Canvas EditTask */

  const [show_4, setShow_4] = React.useState(false);
  const handleClose_4 = () => setShow_4(false);
  const handleShow_4 = () => setShow_4(true);


  const  Lobby=()=>{
    navigate('/Lobby')
  }

  const  LogOut=()=>{
    navigate('/Login')
  }

  const seeDropDown=()=>{
    document.getElementById('nav-dropdown-dark-example').click();
  }

  const appendBoardPopUp=()=>{
    handleShow()
  }

  const editBoardPopUp=()=>{
    handleShow_2()
  }

  const newTaskPopUp=()=>{
    handleShow_3()
  }

  const EditTaskPopUp=()=>{
    handleShow_4()
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
          <div className='BodyKanban '>
              <div className='AppendKanbaContainer'>
                      <p className='titleKanban font_medium'>Organiza tu flujo de trabajo de forma <span className='blue'>visual</span> y <span className='blue'>eficiente</span> con nuestro tablero <span className='blue'>Kanban</span></p>
              </div>
              <div className='KanbaButtonContainer'>
                      <div onClick={appendBoardPopUp} className='ButtonElement_kanba'>
                              <span className='ButtonText'>Agregar tablero</span>
                      </div>
              </div>
              <div className='KanbaContainer '>
                        <div className='KanbaContainer_2 swiper-container'>
                          <div className='Board swiper-wrapper'>
                                <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div onClick={newTaskPopUp} className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={editBoardPopUp} className='icon'>
                                        <FaEdit width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
                                        <MdDelete width={30} height={30} color='white'/>
                                    </div>
                                  </div>
                                </div>
                                <div className='contentTableContainer'>
                                  <p className='content font_Light'>Tablero de descripción para tareas que aún no se han realizado</p>
                                </div>
                                <div className='itemsContainer'>
                                        <div  className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                                  
                                        </div>
                                        <div  className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>
                                        <div  className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>
                                        <div  className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>
                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div onClick={newTaskPopUp} className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={editBoardPopUp} className='icon'>
                                        <FaEdit width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
                                        <MdDelete width={30} height={30} color='white'/>
                                    </div>
                                  </div>
                                </div>
                                <div className='contentTableContainer'>
                                  <p className='content font_Light'>Tablero de descripción para tareas que aún no se han realizado</p>
                                </div>
                                <div className='itemsContainer'>
                                        <div  className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>
                                        <div  className='Card border-green'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>

                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div onClick={newTaskPopUp} className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={editBoardPopUp} className='icon'>
                                        <FaEdit width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
                                        <MdDelete width={30} height={30} color='white'/>
                                    </div>
                                  </div>
                                </div>
                                <div className='contentTableContainer'>
                                  <p className='content font_Light'>Tablero de descripción para tareas que aún no se han realizado</p>
                                </div>
                                <div className='itemsContainer'>
                                        <div  className='Card border-green'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='iconContainer_task'>
                                                        <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <MdDelete width={30} height={30} color='white'/>
                                                        </div>
                                                        <div onClick={EditTaskPopUp} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                            <FaEdit width={30} height={30} color='white'/>
                                                        </div>
                                                  </div>
                                        </div>

                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div onClick={newTaskPopUp} className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={editBoardPopUp} className='icon'>
                                        <FaEdit width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
                                        <MdDelete width={30} height={30} color='white'/>
                                    </div>
                                  </div>
                                </div>
                                <div className='contentTableContainer'>
                                  <p className='content font_Light'>Tablero de descripción para tareas que aún no se han realizado</p>
                                </div>
                                <div className='itemsContainer'>
                                        
                                </div>
                          </div>
                        </div>
                        
              </div>
          </div>  
    </div> 
    <Board handleClose={handleClose} handleShow={handleShow} show={show}></Board> 
    <BoardEdit handleClose={handleClose_2} handleShow={handleShow_2} show={show_2}></BoardEdit>
    <Task handleClose={handleClose_3} handleShow={handleShow_3} show={show_3}></Task>
    <Offcanvas_task handleClose={handleClose_4} handleShow={handleShow_4} show={show_4}></Offcanvas_task>
    </>
    
  )
}
