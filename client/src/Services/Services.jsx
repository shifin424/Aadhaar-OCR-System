import axios from "../Api/Api";

export const uploadImageApi = (data, { headers }) => {
    return axios.post('upload', data, { headers })
}