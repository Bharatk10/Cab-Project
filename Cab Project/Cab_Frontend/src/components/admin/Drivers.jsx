import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function Drivers() {
    const [drivers,setDrivers]=useState()
    useEffect(()=>{
      const fetchDrivers=async()=>{
        const res=await axios.get(`http://localhost:8080/backend/driver`).then(response => response.data);
        setDrivers(res.reverse())
      }
      fetchDrivers()
    },[])

    console.log(drivers)
  return (
    <div>
        <hr/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Number</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    drivers&&drivers?.map((driver)=>{
                        return <tr>
                                <td>{driver.name}</td>
                                <td>{driver.email}</td>
                                <td>{driver.number}</td>
                                <td>{driver.location}</td>
                            </tr>
                    })
                }
                {
                    drivers?.length==0&&<tr><td colspan='7' >No rows found</td></tr>
                }
            </tbody>
        </Table>
    </div>
  )
}
