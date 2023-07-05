import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

export default function AllRides() {
  const [rides,setRides]=useState()
  useEffect(()=>{
    const fetchRides=async()=>{
        const res=await axios.post(`http://localhost:8080/backend/allrequests`).then(response => response.data);
        setRides(res.reverse())
    }
    fetchRides()
  },[])

  return (
    <Container>
        <hr/>
            <h3 id='all' >All Requests</h3>
        <hr/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>Pickup</th>
                    <th>Destination</th>
                    <th>Driver</th>
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
                                <td>{ride.driver ? ride.driver.email : '-'}</td>
                                <td>{ride.price}</td>
                                <td>{ride.status}</td>
                            </tr>
                    })
                }
                {
                    rides?.length==0&&<tr><td colspan='7' >No rows found</td></tr>
                }
            </tbody>
        </Table>
    </Container>
  )
}
