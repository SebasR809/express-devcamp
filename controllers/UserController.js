const { DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
const { all } = require('../routes/BootcampRoutes')
//Objeto User:
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req,res)=>{
    const allUsers = await User.findAll()
    res.status(200).json({
        "success" : true,
        "data" : allUsers
    })
}

exports.getSingleUser = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Single user with id:  ${req.params.id}`  
    })
}

exports.createUser = (req,res)=>{
    res.status(201).json({
        "success" : true,
        "data" : "Create user" 
    })
}

exports.updateUser = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Update user with id is: ${req.params.id}` 
    })
}

exports.deleteUser = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Eliminar el user cuyo id es: ${req.params.id}` 
    })
}

