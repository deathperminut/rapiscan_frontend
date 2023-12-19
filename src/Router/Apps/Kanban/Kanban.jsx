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
import { DeleteOrden, deleteBoard, getBoardsData, getOrdersData } from '../../../services/Services';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: '10px',
  margin: `0 0 10px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: '10px',
  width: 250,
});

const items = Array.from({ length: 10 }, (v, k) => k).map((i) => ({
  id: `item-${i}`,
  content: `Item ${i}`,
}));



export default function KanBan() { 
  /* navigate */
  const navigate=useNavigate();
  
  
  /* use context */

  let {selectOrder,setSelectOrder,board,setBoard,token,boards,setBoards,orders,setOrders,userData,setUserData,setToken} =  React.useContext(AppContext);

  /* use States */

  let [preloader,setPreloader] = React.useState(false);
  let [flag_1,setFlag_1] = React.useState(false)


  React.useEffect(()=>{
    //token

    if(token !== null && flag_1 == false){

      // nos traemos los datos

      getBoards(true);
      setFlag_1(true);
      
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
      //setBoards(result.data);
      getOrders(flag,result.data);

    }

  }

  const getOrders=async(flag,boards_)=>{

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
          boards_ = boards_.map((b,index)=>{
            b['orders'] = result.data.filter((obj)=>obj.state == b.id)
            return b
          })
          setBoards(boards_);
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

  const newTaskPopUp=(b)=>{
    setBoard(b)
    handleShow_3()
  }

  const EditTaskPopUp=(ord)=>{
    setSelectOrder(ord)
    handleShow_4()
  }



  const deleteTablet=async(obj)=>{

    Swal.fire({
      title: 'Seguro que deseas eliminar la orden?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async(res) => {
      if (res.isConfirmed) {

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
    })
    
  }

  // delete Order
  const deleteOrder=async(ord)=>{

    Swal.fire({
      title: 'Seguro que deseas eliminar la orden?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async(res) => {
      if (res.isConfirmed) {

        let result =  undefined;
        setPreloader(true);
        result = await DeleteOrden(ord.id,token).catch((error)=>{
            console.log(error);
            setPreloader(false);
            Swal.fire({
              icon: 'info',
              title: 'error al eliminar la orden'
            });
        })

        if(result){

          setPreloader(false);
          console.log(result.data);
          Swal.fire({
            icon: 'success',
            title: 'Eliminado con éxito.'
          });
          getOrders(false,boards);

        }

      }
    })



  }

  // DRAG AND DROP LOGIC
  
  const [draggingItemId, setDraggingItemId] = React.useState(null);

  const onDragStart = (initial) => {
    setDraggingItemId(initial.draggableId);
  };

  const onDragEnd = (event) => {
    // console.log(event);

    // const destination=event.destination
    // const origin = event.source
    // const id = event.draggableId
    // if(destination.droppableId !== origin.droppableId){
    //   // filtramos la lista de donde viene
      
    //   // obtenemos el tablero a donde va
    //   let filterBoardIndex_destination = boards.filter((obj,index)=>{
    //     if (obj.id.toString() == destination.droppableId.toString()){
    //       return index
    //     }
    //   })

    //   let filterBoardIndex = boards.filter((obj,index)=>{
    //     if (obj.id.toString() == origin.droppableId.toString()){
    //       return index
    //     }
    //   })
      

    //   console.log(filterBoardIndex,filterBoardIndex_destination)
    //   let BOARDS = [...boards];
    //   // obtenemos la orden especifica
    //   let specificOrder = BOARDS[filterBoardIndex[0]].orders[parseInt(id)]
    //   // FILTRAMOS la orden de donde viene
    //   BOARDS[filterBoardIndex[0]].orders = BOARDS[filterBoardIndex[0]].orders.map((obj,index)=>obj.id.toString() != id)
    //   // LO COLOCAMOS EN EL ULTIMO LUGAR DE LA COLUMNA SIGUIENTE
    //   BOARDS[filterBoardIndex_destination[0]].orders.push(specificOrder);
    //   // guardamos los tableros
    //   setBoards(BOARDS);
    // }
    // Aquí maneja la lógica de actualización del estado al soltar un elemento
  };


  const getTop = (topPre,scroll) => {
    console.log(topPre-scroll)
    if(topPre-scroll <0){
      return 80
    }else{
      return 200
    }
    if(scroll < 80){

      

    }else if (scroll < 150){

      return 90

    }else if(scroll < 250){
      
      return 80

    }else{
      return 80
    }
  };


  
  
  
  
  
  

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
                        <DragDropContext onDragStart={(initial) => onDragStart(initial)}
                          onDragEnd={onDragEnd}
                          className='KanbaContainer_2 swiper-container'>
                          {boards.map((obj,index)=>(
                              <Droppable droppableId={obj.id.toString()} key={obj?.id.toString()}>
                              {(provided, snapshot)=>(
                                    <div ref={provided.innerRef} {...provided.droppableProps}  className='Board swiper-wrapper' style={{
                                      opacity: snapshot.isDraggingOver ? 0.2 : 1, // Reducir la opacidad si se arrastra sobre el Droppable
                                      zIndex: snapshot.isDraggingOver ? 1 : 1,
                                    /* Otros estilos */
                                    }}>
                                          <div className='nameTableContainer'>
                                            <span className='white nameTable font_medium'>{obj?.title}</span>
                                            <div className='iconsContainer'>
                                              <div onClick={()=>newTaskPopUp(obj)} className='icon'>
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

                                                  
                                                  {obj?.orders.map((ord,index)=>(
                                                    <Draggable draggableId={ord?.id.toString()} index={index} key={ord?.id.toString()} >
                                                              {(provided,snapshot)=>(
                                                              
                                                              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  className={`Card border-blue ${snapshot.isDragging ? 'dragging' : ''}`}
                                                                style={{
                                                                      ...provided.draggableProps.style,
                                                                      position:snapshot.isDragging ?  'absolute' : 'static',
                                                                      left: snapshot.isDragging ? 0 : 0,
                                                                      top: snapshot.isDragging ?  getTop(provided.draggableProps.style.top,window.scrollY)  : 0,
                                                                    }} >
                                                                    <p className='ClienteContainer font_medium white'>{ord.final_client+' '+ord.quotation_number+' ('+ord.country+')'}</p>
                                                                    {/* <p className='descripcionContainer font_Light gray'>{ord.notes}</p> */}
                                                                    <div className='iconContainer_task'>
                                                                          <div onClick={()=>deleteOrder(ord)} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                                              <MdDelete width={30} height={30} color='white'/>
                                                                          </div>
                                                                          <div onClick={()=>EditTaskPopUp(ord)} className='icon' style={{position:'relative',bottom:'10px'}}>
                                                                              <FaEdit width={30} height={30} color='white'/>
                                                                          </div>
                                                                    </div>
                                                              </div>

                                                              )
                                                              
                                                              }
                                                        </Draggable>
                                                    
                                                      
                                                  )
                                                   
                                                  )}
                                                  
                                          </div>
                                    </div>
                              )}
                              
                              </Droppable>
                              
                            )
                          )}
                        </DragDropContext>
                        
              </div>
          </div>  
    </div> 
    <Board getData={getBoards} handleClose={handleClose} handleShow={handleShow} show={show}></Board> 
    <BoardEdit getData={getBoards} handleClose={handleClose_2} handleShow={handleShow_2} show={show_2}></BoardEdit>
    <Task getData={getOrders} handleClose={handleClose_3} handleShow={handleShow_3} show={show_3}></Task>
    <Offcanvas_task getData={getOrders} handleClose={handleClose_4} handleShow={handleShow_4} show={show_4}></Offcanvas_task>
    </>
    
  )
}
