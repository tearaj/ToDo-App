import React from 'react';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { deleteTask } from '../utils/HandleApi';

const ToDoList = (props)=>{
    const handleClickUpdate = ()=>{
        console.log("click update")
        props.updateMode()
    }
    const handleClickDelete =async() =>{
        console.log("delete clicked")
        await deleteTask(props._id)
        await props.getList()
    }
    // console.log(props.text);
    return(
        <div className='toDo'>
            <div className='text'>{props.text}</div>
            <div className="icons">
                
                <BiEdit className='icon' onClick={handleClickUpdate} />
                <AiFillDelete className='icon' onClick={handleClickDelete} />
            </div>
        </div>
    )

}

export default ToDoList;