import axios from 'axios'

const api = axios.create({
  baseURL: 'https://0643-186-205-17-174.ngrok.io/swagger-ui/#/',
})

export default api
