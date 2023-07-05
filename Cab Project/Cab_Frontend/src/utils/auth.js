import axios from "axios";

export const auth=async (email,password,userType)=>{
    const res = await axios.post(`http://localhost:8080/backend/${userType}login`,null,{
      params: {
        email: email, 
        password: password
      } 
    }).then(response => response.data.success);
    return res
}

export const logout=(userType)=>{
    window.localStorage.removeItem(`${userType}userToken`)
    window.location.reload();
}