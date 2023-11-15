import axios from "../Api/Api";

export const uploadImageApi = (data) =>{
    return axios.post('/upload-image',{data})
}