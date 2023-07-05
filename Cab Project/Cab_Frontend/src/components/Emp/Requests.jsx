import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Table, Modal, Form } from 'react-bootstrap'

export default function Requests({eid}) {
    const [rides,setRides]=useState()
    useEffect(()=>{
      const fetchRides=async()=>{
        let res=await axios.get(`http://localhost:8080/backend/getAllpending`).then(response => response.data);
        res=res.filter((ride)=>ride.driver.email==eid)
        setRides(res.reverse())
      }
      fetchRides()
    },[])
  
    const accept=async(id)=>{
      await axios.put(`http://localhost:8080/backend/confirm/${id}`,null,{
        params: {
          status: 'Accepted', 
        } 
      })
      alert('Accepted')
      window.location.reload()
    }

    const reject=async(id)=>{
      await axios.put(`http://localhost:8080/backend/confirm/${id}`,null,{
        params: {
          status: 'Rejected', 
        } 
      })
      alert('Rejected')
      window.location.reload()
    }
  
  return (
    <div>
        <hr/>
            <h3 id='requests'>Your Requests</h3>
          <hr/>
          
          <Table striped bordered hover>
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Location</th>
                  <th>Pickup</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>status</th>
                  <th>Accept</th>
                  <th>Reject</th>
                </tr>
            </thead>
            <tbody>
              {
                rides&&rides?.map((ride)=>{
                    return <tr>
                      <td>{ride.id}</td>
                      <td>{ride.location}</td>
                      <td>{ride.pickup}</td>
                      <td>{ride.destination}</td>
                      <td>{ride.price}</td>
                      <td>{ride.status}</td>
                      <td><Button variant='success' onClick={()=>accept(ride.id)}>Accept</Button></td>
                      <td><Button variant='danger' onClick={()=>reject(ride.id)}>Reject</Button></td>
                    </tr>
                })
              }
              {
                rides?.length==0&&<tr><td colspan='8' >No rows found</td></tr>
              }
            </tbody>
          </Table>

    </div>
  )
}
