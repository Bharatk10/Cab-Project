import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Container, Table, Modal, Form,Card } from 'react-bootstrap'
import AllRides from './AllRides'

export default function Requests() {
    const [rides,setRides]=useState()
    useEffect(()=>{
      const fetchRides=async()=>{
        const res=await axios.get(`http://localhost:8080/backend/getAllraisedrequests`).then(response => response.data);
        setRides(res.reverse())
      }
      fetchRides()
    },[])
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [modalData,setModalData]=useState();
    const [rideId,setRideId]=useState();
    const [driver,setDriver]=useState();
    const assign=async(id,location)=>{
      setDriver()
      setRideId(id)
      const res=await axios.post(`http://localhost:8080/backend/getdriverbylocation`,null,{
        params: {
          location: location, 
        } 
      }).then(response => response.data);
      setModalData(res)
      handleShow()
    }
  
    const addAssignee=async()=>{
      setShow(false)
      try {
        await axios.put(`http://localhost:8080/backend/book/${rideId}`,null,{
        params: {
          demail: driver.email, 
        } 
      })
      } catch (error) {
        
      } 
      window.location.reload()
    }
  return (
    <div>
        <hr/>
            <h3 id='requests'>Raised Requests</h3>
          <hr/>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Choose Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                modalData&&modalData?.map((driver)=>{
                  return <Form.Check 
                  type={'radio'}
                  name={'drivers'}
                  onClick={()=>setDriver(driver)}
                  label={driver.email}
                />
                })
              }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addAssignee}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
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
                  <th>Assign to</th>
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
                      <td>{ride.driver ?? '-'}</td>
                      <td>{ride.price}</td>
                      <td>{ride.status}</td>
                      <td><Button onClick={()=>assign(ride.id,ride.location)}>Assign to</Button></td>
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
