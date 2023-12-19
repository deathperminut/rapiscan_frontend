import axios from "axios";
import { environment } from "../environments/environments";

// USER SERVICES

const RegisterService=async(body)=>{

    let path =  environment.api + environment.create_user
    let data = new FormData()
    data.append('username',body.username)
    data.append('first_name',body.first_name)
    data.append('password',body.password)
    data.append('email',body.email)


    return await axios.post(path,data)

}

const LoginService=async(body)=>{

    let path = environment.api+environment.login
    return await axios.post(path,body)

}

const changePassword=async(body,token)=>{
    let config = {
        headers: {
        Authorization: 'Token ' + token,
        },
    };
    let path = environment.api+environment.change_password
    return await axios.post(path,body,config)
}

const getUserDetails= async(token)=>{

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    let path = environment.api+environment.get_user_details
    return await axios.get(path,config)
}

// KANBAN DATA

const getBoardsData=async(token)=>{

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };

    let path = environment.api+environment.get_boards
    return await axios.get(path,config)

}

const createBoard=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
    };

  let path = environment.api+environment.create_board
  return await axios.post(path,body,config)

}

const editBoard=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
    };

  let path = environment.api+environment.update_board+body.id+'/update/'
  return await axios.put(path,body,config)

}

const deleteBoard=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
  };

  let path = environment.api+environment.update_board+body.id+'/delete/'
  return await axios.delete(path,config)

}

/* ORDERS DATA */

const createOrder = async(body,token)=>{

  let config = {
    headers: {
      Authorization: 'Token ' + token,
    },
  }

  let Body = new FormData();
  // AGREGAMOS ELEMENTOS
  Body.append('quotation_number',body.quotation_number);
  Body.append('state',body.state);
  Body.append('po_code',body.po_code);
  Body.append('final_client',body.final_client);
  Body.append('sales_entity_code',body.sales_entity_code);
  Body.append('country',body.country);
  Body.append('distributor',body.distributor);
  Body.append('notes',body.notes);
  Body.append('position',body.position);
  // los archivos tienen una logica diferente
  Body.append('aes_file_url',body.aes_file_url);
  Body.append('eus_file_url',body.eus_file_url);
  Body.append('caf_file_url',body.caf_file_url);
  Body.append('delivery_checklist_file_url',body.delivery_checklist_file_url);
  Body.append('quotation_file_url',body.quotation_file_url);
  Body.append('po_file_url',body.po_file_url);
  Body.append('ectr_file_url',body.ectr_file_url);
  // FORMDATA
  let path = environment.api+environment.create_order

  return await axios.post(path,Body,config)

}


const getOrdersData=async(token)=>{

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    let path = environment.api+environment.get_orders


    return await axios.get(path,config)
}

// ELIMINAMOS ORDENES

const DeleteOrden=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
  };

  let path = environment.api+environment.delete_order+body+'/delete/'
  return await axios.delete(path,config)

}

// UPDATE ORDER

const updateOrden=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
  };
  let path = environment.api+environment.update_order+body.id+'/update/'
  return await axios.put(path,body,config)

}

const updateOrden_2=async(body,token)=>{

  let config = {
      headers: {
        Authorization: 'Token ' + token,
      },
  };
  console.log('datos a actualizar: ',body);
  let Body = new FormData();
  // AGREGAMOS ELEMENTOS
  Body.append('quotation_number',body.quotation_number);
  Body.append('state',body.state);
  Body.append('po_code',body.po_code);
  Body.append('final_client',body.final_client);
  Body.append('sales_entity_code',body.sales_entity_code);
  Body.append('country',body.country);
  Body.append('distributor',body.distributor);
  Body.append('notes',body.notes);
  Body.append('position',body.position);
  // ARCHIVOS
  console.log(body,body.aes_file_url instanceof File)
  if(body.aes_file_url instanceof File){
    Body.append('aes_file_url',body.aes_file_url);
  }
  if(body.eus_file_url instanceof File){
    Body.append('eus_file_url',body.eus_file_url);
  }
  if(body.caf_file_url instanceof File){
    Body.append('caf_file_url',body.caf_file_url);
  }
  if(body.delivery_checklist_file_url instanceof File){
    Body.append('delivery_checklist_file_url',body.delivery_checklist_file_url);
  }
  if(body.quotation_file_url instanceof File){
    Body.append('quotation_file_url',body.quotation_file_url);
  }
  if(body.po_file_url instanceof File){
    Body.append('po_file_url',body.po_file_url);
  }
  if(body.ectr_file_url instanceof File){
    Body.append('ectr_file_url',body.ectr_file_url);
  }

  console.log("BODY FINAL: ",Body.get('aes_file_url'));


  let path = environment.api+environment.update_order+body.id+'/update/'
  return await axios.put(path,Body,config)

}



export{updateOrden_2,updateOrden,DeleteOrden,createOrder,deleteBoard,editBoard,createBoard,getBoardsData,getOrdersData,LoginService,changePassword,RegisterService,getUserDetails}