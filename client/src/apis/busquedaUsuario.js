import axios from "axios"
//NODE_ENV = 'development'
//NODE_ENV = 'production'
//si esta en modo de produccion baseurl = /api/v1/carSante
//o si no baseurl="http://localhost:4000/api/v1/carSante"
//const baseURLS= "http://localhost:4000/api/v1/carSante"
const baseURL = process.env.NODE_ENV === "production"?"api/v1/carSante":"http://localhost:4000/api/v1/carSante"

export default axios.create({
    baseURL,
});