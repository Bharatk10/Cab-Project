import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function History({eid}) {
    const [rides,setRides]=useState()
    useEffect(()=>{
      const fetchRides=async()=>{
        let res=await axios.get(`http://localhost:8080/backend/allrequests`).then(response => response.data);
        console.log(res)
        res=res.filter((ride)=>ride.driver.email==eid)
        res=res.reverse()
        setRides(res)
      }
      fetchRides()
    },[])
    console.log(rides)
  
  return (
    <div>
        <hr/>
            <h3 id='requests'>Your History</h3>
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
