const { DataTypes, ValidationError  } = require('sequelize')
const CourseModel = require('../models/course')
const sequelize = require('../config/seq')
const { all } = require('../routes/CoursesRoutes')
//Objeto User:
const Course = CourseModel(sequelize , DataTypes)

exports.getAllCourses = async (req, res)=>{
    try{
        const allCourses = await Course.findAll()
        res 
            .status(200)
            .json({
                "success" : true,
                "data": allCourses
            })
        }catch(error){
            res.status(400).json({
                "success":false,
                "error": error
            })
        }
}

exports.getSingleCourse = async (req, res)=>{
    try{
        const singleCourse = await Course.findByPk(req.params.id)
        if(!singleCourse){
            res.status(400).json({
                "success" : false,
                "error" : "Usuario no encontrado"
            })
        }else{
            res.status(200).json({
                "success" : true,
                "data": singleCourse
            })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.createCourse = async (req , res)=>{
    try {
        const newCourse = await Course.create(req.body)
        res.status(201).json({
            "success" : true,
            "data": newCourse
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

exports.updateCourse = async (req , res)=>{
    try {
        const updateCourse = await Course.update(req.body,id)
        if (!singleCourse) {
            res.status(400).json({
                "success" : false,
                "error" : "Curso no encontrado"
            })
        } else {
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            
            const updateCourse = await Course.findByPk(req.params.id)
            res.status(200).json({
                "success" : true,
                "data" : updateCourse 
            })
        }
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}

exports.deleteCourse = async (req , res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id)
        if (!singleCourse) {
            res.status(400).json({
                "success" : false,
                "error" : "Curso no encontrado"
            })    
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
            })
            
            const deleteCourse = await Course.findByPk(req.params.id)
            res.status(200).json({
                "success" : true,
                "data" : deleteCourse
            })
        }    
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "error" : "Error de Servidor"
        })
    }
}