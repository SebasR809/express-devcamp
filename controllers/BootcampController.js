exports.getAllBootcamps = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : "All bootcamps"
    })
}

exports.getSingleBootcamp = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Single Bootcamp with id:  ${req.params.id}`  
    })
}

exports.createBootcamp = (req,res)=>{
    res.status(201).json({
        "success" : true,
        "data" : "Create bootcamp" 
    })
}

exports.updateBootcamp = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Update bootcamp with id is: ${req.params.id}` 
    })
}

exports.deleteBootcamp = (req,res)=>{
    res.status(200).json({
        "success" : true,
        "data" : `Eliminar el bootcamp cuyo id es: ${req.params.id}` 
    })
}

