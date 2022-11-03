const { DataTypes, ValidationError } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
const { all } = require('../routes/BootcampRoutes')
//Objeto User:
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req,res)=>{
    try {
        const allUsers = await User.findAll()
        res.status(200).json({
            "success" : true,
            "data" : allUsers
        })    
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}

exports.getSingleUser = async (req,res)=>{
    try {
        const SingleUser = await User.findByPk(req.params.id)
        if (!SingleUser) {
            res.status(400).json({
                "success" : false,
                "error" : "Usuario no encontrado"
            })
        }else{
            res.status(200).json({
                "success" : true,
                "data" : SingleUser  
            })
        }    
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}

exports.createUser = async (req,res)=>{
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            "success" : true,
            "data" : newUser
        })    
    } catch (error) {
        if (error instanceof ValidationError) {
            const msg_errors = error.errors.map(error_item => error_item.message )
            res.status(422).json({
                "success" : false,
                "error" : msg_errors
            })
        }else{
            res.status(400).json({
                "success" : false,
                "error" : "Error de Servidor"
            })
        }
    }
}

exports.updateUser = async (req,res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id)
        if (!singleUser) {
            res.status(400).json({
                "success" : false,
                "error" : "Usuario no encontrado"
            })
        }else{
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            
            const updateUser = await User.findByPk(req.params.id)
            res.status(200).json({
                "success" : true,
                "data" : updateUser 
            })
        }
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const SingleUser = await User.findByPk(req.params.id)
        if (!SingleUser) {
            res.status(400).json({
                "success" : false,
                "error" : "Usuario no encontrado"
            })
        }else{
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })

            const deleteUser = await User.findByPk(req.params.id)
            res.status(200).json({
                "success" : true,
                "data" : deleteUser 
            })    
        }
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}

