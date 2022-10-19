const express = require('express')
const Router = express.Router()

//Listar
Router.get('/', (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : "Se mostraran todos los courses" 
    })
})

 //Listar por Id
 Router.get('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Course con Id: ${ req.params.id }`  
    })
})

//Create
Router.post('/',(req,res)=>{
    res.status(201).json({
        "success" : true,
        "data" : "Agregar Course" 
    })
})

//Update
Router.put('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Actualizar el course cuyo id es: ${req.params.id}` 
    })
})
    
//Delete
Router.delete('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Eliminar el course cuyo id es: ${req.params.id}` 
    })
})

module.exports = Router