import axios from "axios";

export const getUsers=async()=>{
    const users= await axios.get('http://localhost:8080/backend/user').then(res=>res.data)
    return users
}

export const getUser=async(email)=>{
    const users=await getUsers()
    const user=users.filter((e)=>e.email===email)
    return user[0]
}
