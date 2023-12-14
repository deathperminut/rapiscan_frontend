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
import { AppContext } from '../../../Context';
import Preloader from '../../../Components/Preloader/Loading';
import Swal from 'sweetalert2';
import { deleteBoard, getBoardsData, getOrdersData } from '../../../services/Services';

export default function KanBan() { 
  /* navigate */
  const navigate=useNavigate();
  
  
  /* use context */

  let {board,setBoard,token,boards,setBoards,orders,setOrders,userData,setUserData,setToken} =  React.useContext(AppContext);

  /* use States */

  let [preloader,setPreloader] = React.useState(false);

  React.useEffect(()=>{
    //token

    if(token !== null){

      // nos traemos los datos
      getBoards(true);
      
    }else{

      navigate('/Login');
      
    }
  },[token])


  // data functions

  const getBoards=async(flag)=>{

    setPreloader(true);

    let result  = undefined;

    result =  await getBoardsData(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Hay problemas para cargar la información ordenes y tableros.'
      });
    })
    
    if(result){
      // obtenemos información
      console.log(result.data);
      setBoards(result.data);
      getOrders(flag);

    }

  }

  const getOrders=async(flag)=>{

    let result = undefined;

    result = await getOrdersData(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Hay problemas para cargar la información ordenes y tableros.'
      });
    })

    if(result){
          setPreloader(false);
          console.log(result.data);
          setOrders(result.data);
          if(flag){
            Swal.fire({
              icon: 'success',
              title: 'Información cargada con éxito.'
            });
          }
    }

  }

  // BOARDS FUNCTION

  

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
    setUserData(null)
    setToken(null)
    navigate('/Login')
  }

  const seeDropDown=()=>{
    document.getElementById('nav-dropdown-dark-example').click();
  }

  const appendBoardPopUp=()=>{
    handleShow()
  }


  const editBoardPopUp=(b)=>{
    setBoard(b)
    handleShow_2()
  }

  const newTaskPopUp=()=>{
    handleShow_3()
  }

  const EditTaskPopUp=()=>{
    handleShow_4()
  }


  const deleteTablet=async(obj)=>{
    let result =  undefined;
    setPreloader(true);
    result =  await deleteBoard(obj,token).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Error al eliminar el tablero.'
          });
    })

    if(result){
      console.log(result);
      setPreloader(false);
      Swal.fire({
        icon: 'success',
        title: 'Tablero eliminado con éxito.'
      });
      getBoards(false)
    }
  }

  

  


  return (
    <>
    {preloader===true ? <Preloader></Preloader> : <></>}
    <div className='Body_3'>
          <div className='Navbar'>
              <div className='iconContainer_2'>
                <span className='textIcon_2'>R</span>
              </div>
              <div onClick={seeDropDown} className='nameContainer dropdown-toggle d-flex flex-row justify-content-center align-items-center align-self-center'>
                  <span className='nameNavbar font_medium'>
                  {userData?.username}
                  </span>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title=""
                    menuVariant="dark"
                  >
                    <NavDropdown.Item onClick={Lobby}>Lobby</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>navigate('/Password')}>Cambiar contraseña</NavDropdown.Item>
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
                          {boards.map((obj,index)=>{
                            return(
                              <div key={index} className='Board swiper-wrapper'>
                                <div className='nameTableContainer'>
                                  <span className='white nameTable font_medium'>{obj?.title}</span>
                                  <div className='iconsContainer'>
                                    <div onClick={newTaskPopUp} className='icon'>
                                        <TiPlusOutline width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={()=>editBoardPopUp(obj)} className='icon'>
                                        <FaEdit width={30} height={30} color='white'/>
                                    </div>
                                    <div onClick={()=>deleteTablet(obj)} className='icon'>
                                        <MdDelete width={30} height={30} color='white'/>
                                    </div>
                                  </div>
                                </div>
                                <div className='contentTableContainer'>
                                  <p className='content font_Light'>{obj?.description}</p>
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
                            )
                          })}
                        </div>
                        
              </div>
          </div>  
    </div> 
    <Board getData={getBoards} handleClose={handleClose} handleShow={handleShow} show={show}></Board> 
    <BoardEdit getData={getBoards} handleClose={handleClose_2} handleShow={handleShow_2} show={show_2}></BoardEdit>
    <Task handleClose={handleClose_3} handleShow={handleShow_3} show={show_3}></Task>
    <Offcanvas_task handleClose={handleClose_4} handleShow={handleShow_4} show={show_4}></Offcanvas_task>
    </>
    
  )
}
