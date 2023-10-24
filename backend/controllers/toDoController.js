const toDoModel = require('../models/ToDoModels.js')

// async function getToDo(req,res){

//     const toDo = await toDoModel.fi
// }

module.exports.getToDo = async (req,res)=>{
    try{
        const toDo = await toDoModel.find()
        res.send(toDo)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.saveToDo = async (req,res)=>{
    console.log(req.body)
    const { text } = await req.body
    if(text!=''){
        try{
            const data = await toDoModel.create({text})
            console.log("Data added")
            console.log(data)
            res.send(data)
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        res.send({"err": "task field should not be empty"})
    }
}

module.exports.updateToDo = async(req,res)=>{
    const {_id,text} = req.body
    try{
        const val = await toDoModel.findByIdAndUpdate(_id,{text})
        
        res.status(201).send('Update Successful'+val)
        
        console.log("Updated successfully!")
    }catch(err){
        console.log(err)
    }
    
}


module.exports.deleteToDo = async(req,res)=>{
    const {_id,text} = req.body
    try{
        const val = await toDoModel.findByIdAndDelete(_id)
        
        res.status(204).send('Delete Successful '+val)
        
        console.log("Deleted successfully.")
    }catch(err){
        console.log(err)
    }
    
}

module.exports.tester = async(req,res)=>{
    res.send("API WORKS")
}