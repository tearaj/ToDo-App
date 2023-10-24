const axios = require("axios");
const baseUrl = 'http://localhost:3000/'

axios.get(baseUrl).then(({data})=>{console.log(data)}).catch((err)=>console.log(err))

// const getAllToDo = async () => {
//     console.log("GET called");
//     try {
//         const response = await axios.get(baseUrl, { validateStatus: (status) => status < 500 });
//         console.log("AWAITING RESPONSE")
//         if (response.status === 200) {
//             const toDos = response.data;
//             console.log("NEW TODO", toDos);
//             // setToDo(toDos);
//         } else {
//             console.log("API responded with a non-success status code:", response.status);
//             // You can handle the error in a way that's appropriate for your application
//         }
//     } catch (err) {
//         console.log("Error occurred during the API request:", err);
//     }
// }

// getAllToDo()