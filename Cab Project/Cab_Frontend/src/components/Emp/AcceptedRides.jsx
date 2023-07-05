import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'

export default function AcceptedRides({eid}) {
    const [rides,setRides]=useState()
    useEffect(()=>{
      const fetchRides=async()=>{
        let res=await axios.get(`http://localhost:8080/backend/getAllaccepted`).then(response => response.data);
        res=res.filter((ride)=>ride.driver.email==eid)
        setRides(res.reverse())
      }
      fetchRides()
    },[])
    
    const complete=async(id)=>{
      await axios.put(`http://localhost:8080/backend/confirm/${id}`,null,{
        params: {
          status: 'Completed', 
        } 
      })
      alert('Completed')
      window.location.reload()
    }
  return (
    <div>
        <hr/>
            <h3 id='accepted'>Accepted Requests</h3>
          <hr/>
        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Pickup</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>status</th>
                  <th>Complete ride</th>
                </tr>
            </thead>
            <tbody>
              {
                rides&&rides?.map((ride)=>{
                    return <tr>
                      <td>{ride.id}</td>
                      <td>{ride.pickup}</td>
                      <td>{ride.destination}</td>
                      <td>{ride.price}</td>
                      <td>{ride.status}</td>
                      <td><Button variant='success' onClick={()=>{complete(ride.id)}}>Completed</Button></td>
                    </tr>
                })
              }
              {
                rides?.length==0&&<tr><td colspan='6' >No rows found</td></tr>
              }
            </tbody>
        </Table>
    </div>
  )
}
