import axios from "../Api/Api";

export const uploadImageApi = (data,{headers}) =>{
    console.log(data,headers,"In service")
    return axios.post('/upload',data,{headers})
}