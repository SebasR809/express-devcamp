const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv')
const endpoints = require('express-list-endpoints')
//Dependencias 
const BootcampRoutes = require('./routes/BootcampRoutes')
const CourseRoutes = require('./routes/CoursesRoutes')
const listEndpoints = require('express-list-endpoints')

//Definir archivo .env
dotenv.config({
    path: './config/config.env'

})

//Crear el objeto aplicación con express
const app = express()

//Relacionar rutas de dominio
app.use('/api/v1/bootcamps', BootcampRoutes)
app.use('/api/v1/courses', CourseRoutes)
//Ruta de prueba
app.get('/',(request, response)=>{
    response.send('Prueba')
})

//Consultar endpoints del proyecto
console.log(listEndpoints(app))

//Iniciar servidor de desarrollo
app.listen(process.env.PORT ,()=>{
    console.log('Servidor Iniciado'.rainbow)
})
