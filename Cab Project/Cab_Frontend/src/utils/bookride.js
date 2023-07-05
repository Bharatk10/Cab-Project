import axios from "axios";

export const bookride=async(pickup,destination,email)=>{
    const res = await axios.post(`http://localhost:8080/backend/book`,null,{
      params: {
        pickup: pickup, 
        destination: destination,
        email: email
      } 
    }).then(response => response.data);
    return res
}