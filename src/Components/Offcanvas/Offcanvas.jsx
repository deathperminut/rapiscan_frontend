import React from 'react'
import './Offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import Preloader from '../Preloader/Loading';
import Swal from 'sweetalert2';
import { AppContext } from '../../Context';
import { updateOrden, updateOrden_2 } from '../../services/Services';
import { FaFileExport } from "react-icons/fa6";
/**
 * MENSAJES PERSONALIZADOS AL BUSCAR O CARGAR OPCIONES EN REACT SELECT
 */

const { NoOptionsMessage } = components;

const customNoOptionsMessage = props => (
  <NoOptionsMessage {...props} className="custom-no-options-message-internal-form-">No registrado</NoOptionsMessage>
);

const { LoadingMessage } = components;

const customLoadingMessage = props => (
  <LoadingMessage {...props} className="custom-loading-message-internal-form-">Cargando</LoadingMessage>
);

/**
* ANIMATE DELETE MULTISELECT
*/

const animatedComponents = makeAnimated();

/**
 * Se genera componente nuevo para soportar el placeholder animado del input 
 */

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  const { inputId, placeholder } = props.selectProps;
  return (
    <ValueContainer {...props}>
      <Placeholder htmlFor={inputId} {...props}>
        {placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};
const Entity = [
    { value: "Normal", label: "Normal" },
    { value: "Retraso", label: "Retraso" },
    { value: "Finalizada", label: "Finalizada" }
  ];

const selectStyles = {
    /**
    * Estilos del icono del dropdown del select
    * Estilos del separador del select
    * Estilos del icono de cerrar del select
    */
    dropdownIndicator: (styles) => ({ ...styles, 
      color: "#0463a2", 
      padding: 0, paddingTop: '0.34rem !important', 
      paddingRight: '0.5rem !important',
      width: '25px',
      height: '25px',
      "&:hover": {
        color: "#0463a2",
      } 
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    clearIndicator: (styles) => ({ ...styles, 
      color: "#414D55", 
      padding: 0, 
      paddingTop: '0.05rem !important',
      width: '15px',
      height: '15px',
      "&:hover": {
        color: "#414D55",
      } 
    }),
    /**
    * ESTILOS DEL INPUT GLOBAL
    */
    control: () => ({
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    alignSelf: "start",
    justifyContent: "start",
    height: 'auto',
    minHeight: 50,
    maxHeight: 150,
    paddingLeft: '2.1rem',
    paddingTop: '0.3rem',
    width: "100%",
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderBottom: "1px solid #0463a2",
    }),
    /**
    * ESTILOS DEL INPUT
    */
    input: (provided) => ({
    ...provided,
    color: 'white',
    fontSize: 13,
    }),
    /**
    * ESTILOS DEL MENU DESPLEGABLE DEL SELECT
    */
    menu: (styles) => ({
    ...styles,
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 6px 0px',
    borderRadius: '1rem',
    padding: 0,
    marginTop: 8,
    marginBottom: 0,
    height: 'auto',
    minHeight: 'auto',
    maxHeight: 300,
    overflow: "hidden",
    color: '#728998',
    fontSize: 12,
    }),
    menuList: () => ({
      paddingTop: 0,
      paddingBottom: 0,
      height: 'auto',
      minHeight: 'auto',
      maxHeight: 300,
      overflow: "auto",
      "::-webkit-scrollbar": {
        width: "0px !important",
        height: "0px !important",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent !important"
      },
      "::-webkit-scrollbar-thumb": {
        background: "transparent !important"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "transparent !important"
      }
    }),
    /**
    * ESTILOS DE LAS OPCIONES DESPLEGABLES
    */
    option: (provided, state) => ({
    ...provided,
    fontSize: 11,
    backgroundColor: state.isSelected ? "#0463a2" : "rgba(255, 255, 255, 1)",
    padding: '0.5rem 0.8rem 0.5rem 0.8rem',
    borderRadius: '1rem',
    ":hover": {
    background: "#0463a2",
    color: '#FFFFFF',
    }
    }),
    /**
    * ESTILOS DEL CONTENEDOR
    */
    container: (provided, state) => ({
    ...provided,
    marginTop: 0,
    width: '100%',
    position: 'relative',
    flex: '1 1 auto'
    }),
    valueContainer: (provided, state) => ({
    ...provided,
    overflow: "visible",
    position: "relative",
    top: "4px"
    }),
    /**
    * ESTILOS PLACEHOLDER DEL INPUT
    */
    placeholder: (provided, state) => ({
    ...provided,
    width: '100%',
    position: "absolute",
    top: state.hasValue || state.selectProps.inputValue ? -20 : "22%",
    left: state.hasValue || state.selectProps.inputValue ? -32 : "0%",
    transition: "top 0.1s, font-size 0.1s",
    color: 'gray',
    fontSize: state.hasValue || state.selectProps.inputValue ? 13 : "14px",
    lineHeight: 1.25,
    overflow: 'hidden',
    textAlign: 'start',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
    }),
    /**
    * ESTILOS TEXTO EN EL INPUT
    */
    singleValue: (styles) => ({ 
    ...styles, 
    fontSize: 13,
    color: "#FFFFFF", 
    padding: '3px',
    margin: '0px',
    marginTop: '2px',
    marginLeft: 0,
    marginRight: 0
    }),
    multiValue: (styles) => ({ 
      ...styles, 
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 6px 0px',
      borderRadius: '0.5rem',
      alignItems: 'center',
      alignSelf: 'center',
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      fontFamily: 'Monserat-regular',
      fontSize: 14,
      color: '#728998',
      paddingLeft: '0.5rem',
      paddingRight: '0.6rem',
      paddingBottom: '0.3rem'
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      borderRadius: '6rem',
      paddingLeft: '6px',
      width: '26px',
      height: '26px',
      color: '#414D55',
      backgroundColor: '#F8F8F8',
      ':hover': {
        color: '#FFFFFF',
        backgroundColor: '#6149CD',
      }
    })
  };

export default function Offcanvas_task(props) {
  
  /* app context */

  let {selectOrder,setSelectOrder,token,boards} = React.useContext(AppContext);

  /* useState */

  let [preloader,setPreloader] = React.useState(false);
  let [order,setOrder] = React.useState({
    'quotation_number':'',
    'state':'',
    'po_code':'',
    'final_client':'',
    'sales_entity_code':'',
    'country':'',
    'distributor':'',
    'notes':'',
    'position':'',
  })

  let [file,setFile] = React.useState('');
  let [title,setTitle] = React.useState('');

  React.useEffect(()=>{

    setOrder(selectOrder);

  },[selectOrder])


  // READ USE STATE

  let readInputs=(event,type)=>{
    
    setOrder({...order,[type]:event.target.value})
    
  }

  let readFile=(event)=>{
    console.log(event.target.files[0]);
    setOrder({...order,[title]:event.target.files[0]})
    Swal.fire({
      icon: 'info',
      title: 'Completa la acción dando clic en guardar.',
    });
  }

  // EDITAMOS

  const openFile=(url,t)=>{

    if(url == null){
      Swal.fire({
        icon: 'info',
        title: 'No tienes un archivo cargado, usa el formulario para actualizar el archivo',
      });
    }else{
      window.open(url);
    }

    setFile(url);
    setTitle(t);
    //window.open(url)

  }


  const editAnex=async()=>{

      let result =  undefined;
      setPreloader(true);
      // eliminamos el tipo file para actualizar
      delete order?.attached_files
      result = await updateOrden_2(order,token).catch((error)=>{
        setPreloader(false);
        console.log(error);
        Swal.fire({
          icon: 'info',
          title: 'Problemas para actualizar la orden.'
        });
      })

      if(result){
        setPreloader(false);
        console.log(result.data);
        Swal.fire({
          icon: 'success',
          title: 'Orden actualizada con éxito.'
        });
        setOrder({
          'quotation_number':'',
          'state':'',
          'po_code':'',
          'final_client':'',
          'sales_entity_code':'',
          'country':'',
          'distributor':'',
          'notes':'',
          'position':'',
        });
        setFile('');
        setTitle('');
        props.handleClose();
        props.getData(false,boards);
      }

  }

  const seeFile=()=>{

    if(file == null){

      Swal.fire({
        icon: 'info',
        title: 'No tienes un archivo cargado'
      });

    }else{
      window.open(file);
    }

  }



  return (
    <Offcanvas placement={'end'} show={props.show} onHide={props.handleClose}>
        {preloader===true ? <Preloader></Preloader> : <></>}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='offcanvaTitle font_medium'>Orden</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='font_medium gray'>
            <p>Edita la información de la orden</p>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'quotation_number')} value={order?.quotation_number} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Número de cotización</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'po_code')} value={order?.po_code} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Código PO</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'final_client')} value={order?.final_client} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Cliente final</label>
                </div>
            </div>
            
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'country')} value={order?.country} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>País</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'distributor')} value={order?.distributor} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Distribuidor</label>
                </div>
            </div>
            <div className='inputContainer inputStyle'>
                <div className='form-floating inner-addon- left-addon-'>
                        <input onChange={(event)=>readInputs(event,'sales_entity_code')} value={order?.sales_entity_code} type="text" className='form-control' id='user' placeholder="Usuario" />
                        <label className='fs-5- ff-monse-regular-'>Código de entidad de venta</label>
                </div>
            </div>
            <div style={{marginTop:'30px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                <textarea onChange={(event)=>readInputs(event,'notes')} value={order?.notes} style={{height:'100px'}} className='form-control' id="exampleFormControlTextarea1" rows="4" placeholder='Ingresa una corta descripción aquí'  ></textarea>
            </div>
            <div className='inputContainer inputStyle' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <span className='fileLink'>Da clic para visualizar el anexo</span>
            </div>
            <div className='inputContainer inputStyle overflow-x' style={{display:'flex',justifyContent:'center','alignItems':'center'}}>
                  {title == 'aes_file' ? 
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.aes_file,'aes_file')} className='fileContainer_2'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Aes</span>

                  </div>
                  :
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.aes_file,'aes_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Aes</span>

                  </div>
                  }

                  {title == 'eus_file' ? 
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.eus_file,'eus_file')} className='fileContainer_2'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Eus</span>

                  </div>
                  :
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.eus_file,'eus_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Eus</span>

                  </div>
                  }

                  {title == 'caf_file' ? 
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.caf_file,'caf_file')} className='fileContainer_2'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Caf</span>

                  </div>
                  :
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.caf_file,'caf_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Caf</span>

                  </div>
                  }
                  
                  
                  
            </div>
            <div className='inputContainer inputStyle overflow-x' style={{display:'flex',justifyContent:'center','alignItems':'center'}}>

                {title == 'delivery_checklist_file' ? 
                    <div className='display-column'>

                        <div onClick={()=>openFile(order?.delivery_checklist_file,'delivery_checklist_file')} className='fileContainer_2'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>checklist</span>

                    </div>
                  :
                    <div className='display-column'>

                        <div onClick={()=>openFile(order?.delivery_checklist_file,'delivery_checklist_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>checklist</span>

                    </div>
                  }

                  {title == 'quotation_file' ? 
                      <div className='display-column'>

                          <div onClick={()=>openFile(order?.quotation_file,'quotation_file')} className='fileContainer_2'>
                            <FaFileExport size={20}></FaFileExport>
                          </div>
                          <span style={{marginTop:'10px'}}>Cotización</span>

                      </div>
                  :
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.quotation_file,'quotation_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span style={{marginTop:'10px'}}>Cotización</span>

                  </div>
                  }

                  {title == 'po_file' ? 
                  <div className='display-column'>

                  <div onClick={()=>openFile(order?.po_file,'po_file')} className='fileContainer_2'>
                    <FaFileExport size={20}></FaFileExport>
                  </div>
                  <span style={{marginTop:'10px'}}>Po</span>

                  </div>
                  :
                  <div className='display-column'>

                  <div onClick={()=>openFile(order?.po_file,'po_file')} className='fileContainer'>
                    <FaFileExport size={20}></FaFileExport>
                  </div>
                  <span style={{marginTop:'10px'}}>Po</span>

                  </div>
                  }

                  {title == 'ectr_file' ? 
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.ectr_file,'ectr_file')}  className='fileContainer_2'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span  style={{marginTop:'10px'}}>Ectr</span>

                    </div>
                  :
                  <div className='display-column'>

                        <div onClick={()=>openFile(order?.ectr_file,'ectr_file')} className='fileContainer'>
                          <FaFileExport size={20}></FaFileExport>
                        </div>
                        <span  style={{marginTop:'10px'}}>Ectr</span>

                    </div>
                  }
                  
                  
                  
                  
                  
            </div>
            {file !== ''  ?  
            <>
              {/* {
                file !== null ? 
                <div onClick={seeFile} className='ButtonElement'>
                      <span className='ButtonText'>Ver</span>
                </div>
                :
                <></>
              } */}
              
              <div className='inputContainer inputStyle' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <p className='gray'>Cambia tus anexos mediante el siguiente formulario</p>
              </div>
              <div className='inputContainer inputStyle'>
                  <div className='form-floating inner-addon- left-addon-'>
                          <input onChange={(event)=>readFile(event)} type="file" className='form-control' id='user'/>
                          <label className='fs-5- ff-monse-regular-'>Anexo</label>
                  </div>
              </div>
            </>
            :
            <></>
            }
            
            <div onClick={editAnex} className='ButtonElement'>
                    <span className='ButtonText'>Guardar</span>
            </div>

        </Offcanvas.Body>
      </Offcanvas>
  )
}
