// import 'index.css'
import React,{ useEffect, useState } from "react";
import ToDoList from "./components/toDoList";
import {getAllToDo, updateTask} from "./utils/HandleApi";
import InputBar from './components/inputBar'

function App() {
  
  const [toDo,setToDo] = useState([])
  const [isUpdated,setIsUpdated] = useState({isUpdate:false})
  // const [task,setTask] = useState('')
  // const ipRef = useRef(null)
  // const handleClick = (e)=>{
  //   console.log(e.target.value)

  //   setTask(e.target.value)
  // }
  const getList=()=>{
    getAllToDo(setToDo)
    console.log("Side effect")
  }
  const updateData=async(_id,text)=>{
    setIsUpdated({isUpdate:!isUpdated.isUpdate})
    await updateTask(_id,text)
    console.log((isUpdated))
  }
  const updateButton=(_id,text)=>{
    setIsUpdated({isUpdate:true,_id:_id,text:text})
    console.log((isUpdated))
  }
  useEffect(getList,[])
  
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <InputBar getList = {getList} isUpdated = {isUpdated} updateData={updateData}/>

          <div className="list">
            { 
            console.log("TODO FROM APP: ",toDo)}
            {toDo.map((item) => 
              <ToDoList 
                key = {item._id} 
                _id={item._id} 
                text= {item.text} 
                getList={getList}
                updateMode = {()=>updateButton(item._id,item.text)}
                />)
            }
            
          </div>
      </div>
    </div>
  );
}

export default App;