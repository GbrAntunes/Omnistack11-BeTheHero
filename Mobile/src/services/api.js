import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.42.12:3333' //IP do servidor node
})

export default api