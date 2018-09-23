import axios from 'axios';
import fetch from 'isomorphic-fetch'

const axiosConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    Credentials:'include'
}    

function get(url,data) {
    return fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'credentials': 'include'}).then(res=>res.json())
}

function post(url,data, withCreds = false) {
      return axios.post(url, data, axiosConfig);
}

const httpUtils = {
    get,
    post,
}

export default httpUtils;