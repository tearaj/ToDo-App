import { useState } from "react"
import { addTask } from "../utils/HandleApi"
 const  InputBar = (p)=>{
     const [task,setTask] = useState('')
     const handleClick = async(e)=>{
         e.preventDefault();
         console.log(p.isUpdated.isUpdate)

         if(!p.isUpdated.isUpdate) {

            await addTask(task); 
            await p.getList();

         }
         else if(p.isUpdated.isUpdate){
             console.log("UPDATING MODE")
             await p.updateData(p.isUpdated._id,task)
             await p.getList()
             setTask('')
         }
         
         
        }
        // if(p.isUpdated.isUpdate){
        //     if(p.isUpdated.text!=task)
        //         setTask(p.isUpdated.text)
        // }
        // console.log("IS UPDATED TEXT: ",p.isUpdated.text)
        // console.log("CONDITIONAL RETURN OP: ",!p.isUpdated.isUpdate?task:p.isUpdated.text)
        // console.log(p.isUpdated.isUpdate)
    return(
        <div className="top">
          <input type = "text" 
          placeholder="Add task" 
          value = {task || p.isUpdated.text }
          onChange={e=>{
            setTask(e.target.value)
            // console.log(e.target.value)
            }} />
          <button className="add" onClick = {handleClick} >{p.isUpdated.isUpdate?"Update":"Add"}</button>
        </div>
    )
 }
 export default InputBar