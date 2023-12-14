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



const getOrdersData=async(token)=>{

    let config = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    let path = environment.api+environment.get_boards


    return await axios.get(path,config)
}



export{deleteBoard,editBoard,createBoard,getBoardsData,getOrdersData,LoginService,changePassword,RegisterService,getUserDetails}