import axios from "axios";
import { environment } from "../environments/environments";


const LoginService=async(body)=>{

    let path = environment.api+environment.login
    return await axios.post(path,body)

}

const changePassword=async(body)=>{
    let path = environment.api+environment.login
    return await axios.post(path,body)
}

export{LoginService,changePassword}