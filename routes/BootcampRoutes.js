const express = require('express')
const Router = express.Router()

//Listar
Router.get('/', (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : "Se mostraran todos los bootcamps" 
    })
})

 //Listar por Id
 Router.get('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Bootcamp con Id: ${ req.params.id }`  
    })
})

//Create
Router.post('/',(req,res)=>{
    res.status(201).json({
        "success" : true,
        "data" : "Agregar bootcamp" 
    })
})

//Update
Router.put('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Actualizar el bootcamp cuyo id es: ${req.params.id}` 
    })
})
    
//Delete
Router.delete('/:id',(req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Eliminar el bootcamp cuyo id es: ${req.params.id}` 
    })
})

module.exports = Router

