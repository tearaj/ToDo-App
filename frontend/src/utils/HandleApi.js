import axios from 'axios'

const baseUrl = 'http://localhost:3000/'

const getAllToDo = async (setToDo) => {
    console.log("GET called");
    try {
        const response = await axios.get(baseUrl, { validateStatus: (status) => status < 500 });
        // console.log("AWAITING RESPONSE")
        if (response.status === 200) {
            const toDos = response.data;
            // console.log("NEW TODO", toDos);
            setToDo(toDos);
        } else {
            // console.log("API responded with a non-success status code:", response.status);
            // You can handle the error in a way that's appropriate for your application
        }
    } catch (err) {
        console.log("Error occurred during the API request:", err);
    }
}

const addTask = async(text)=>{
    try{
        console.log(text)
        const response = await axios.post(`${baseUrl}save`, {text: text})
        // console.log(response)
    }catch(err){
        console.log(err)
    }
}

const updateTask = async(_id,text)=>{
    try{
        console.log(text)
        const response = await axios.put(`${baseUrl}update`, {_id:_id,text: text})
        console.log(response)
    }catch(err){
        console.log(err)
    }
}

const deleteTask = async(_id)=>{
    try{
        console.log( _id)
        console.log({_id:_id})
        const response = await axios.delete(`${baseUrl}delete`, {data:{_id:_id}})
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
export {getAllToDo, addTask,deleteTask, updateTask}
