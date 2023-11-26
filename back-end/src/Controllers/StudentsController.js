const StudentsModel = require("../Models/StudentsModel")


//create 
exports.createStudent = async(req,res) => {
    let reqBody= req.body;
    try{
        let result = await StudentsModel.create(reqBody);
        res.status(200).json({status:"success", data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e})
    }
}


//Read

exports.listStudent = async (req,res) =>{
    try{
        let result = await StudentsModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail", data:e})
    }
}


//delete

exports.deleteStudent = async(req,res)=>{
    let id = req.params.id;
    let query = {_id:id};
    try{
        let result = await StudentsModel.deleteOne(query);
        res.status(200).json({status:"success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e})
    }
}

//update 

exports.updateStudent = async(req,res)=>{
    let id = req.params.id;
    let reqBody = req.body;
    let query = {_id:id};

    try{
        let result = await StudentsModel.updateOne(query, reqBody);
        res.status(200).json({status:"success", data:result})
    }
    catch(e){
        res.status(200).json({status:"fail", data:e})
    }
}   



//