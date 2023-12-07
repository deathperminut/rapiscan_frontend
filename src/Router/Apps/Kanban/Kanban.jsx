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
          <div className='BodyKanban '>
              <div className='AppendKanbaContainer'>
                      <p className='titleKanban font_medium'>Organiza tu flujo de trabajo de forma <span className='blue'>visual</span> y <span className='blue'>eficiente</span> con nuestro tablero <span className='blue'>Kanban</span></p>
              </div>
              <div className='KanbaButtonContainer'>
                      <div className='ButtonElement_kanba'>
                              <span className='ButtonText'>Agregar tablero</span>
                      </div>
              </div>
              <div className='KanbaContainer '>
                        <div className='KanbaContainer_2 swiper-container'>
                          <div className='Board swiper-wrapper'>
                                <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
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
                                        <div className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>
                                        <div className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>
                                        <div className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>
                                        <div className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>
                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
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
                                        <div className='Card border-red'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>
                                        <div className='Card border-green'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>

                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
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
                                        <div className='Card border-green'>
                                                  <p className='ClienteContainer font_medium white'>Avianca - 412D23</p>
                                                  <p className='descripcionContainer font_Light gray'>Compra de productos electrónicos en línea: Este pago corresponde a la adquisición de un televisor inteligente de 55 pulgadas, un sistema de altavoces de alta fidelidad y unos auriculares inalámbricos.</p>
                                                  <div className='icon' style={{position:'relative',bottom:'10px'}}>
                                                      <MdDelete width={30} height={30} color='white'/>
                                                  </div>
                                        </div>

                                </div>
                          </div>
                          <div className='Board swiper-wrapper'>
                          <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>Pendientes</span>
                                  <div className='iconsContainer'>
                                    <div className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div className='icon'>
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
    </>
    
  )
}
