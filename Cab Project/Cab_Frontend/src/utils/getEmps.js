import axios from "axios";

export const getEmps=async()=>{
    const drivers= await axios.get('http://localhost:8080/backend/driver').then(res=>res.data)
    return drivers
}

export const getEmp=async(email)=>{
    const drivers=await getEmps()
    const driver=drivers.filter((e)=>e.email===email)
    return driver[0]
}
