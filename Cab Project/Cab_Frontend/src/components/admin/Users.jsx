import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function Users() {
    const [users,setUsers]=useState()
    useEffect(()=>{
      const fetchUsers=async()=>{
        const res=await axios.get(`http://localhost:8080/backend/user`).then(response => response.data);
        setUsers(res.reverse())
      }
      fetchUsers()
    },[])

    console.log(users)
  return (
    <div>
        <hr/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    users&&users?.map((user)=>{
                        return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                            </tr>
                    })
                }
                {
                    users?.length==0&&<tr><td colspan='7' >No rows found</td></tr>
                }
            </tbody>
        </Table>
    </div>
  )
}
