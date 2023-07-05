import React, { useRef, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { validateSignupData } from '../../utils/validate'
import axios from 'axios'

export default function NewDriver() {

  const emailref = useRef()
  const passwordref = useRef()
  const nameref = useRef()
  const numberef = useRef()

  const [loc,setLoc]=useState()

  const add=async()=>{
    //call api
    const res=validateSignupData(emailref.current.value,passwordref.current.value,nameref.current.value,numberef.current.value)
    if(res.valid && loc){
      const res=await axios({
        method: 'post',
        url: `http://localhost:8080/backend/driver`,
        headers: {}, 
        data: {
          email: emailref.current.value, 
          name: nameref.current.value, 
          number: numberef.current.value,
          location: loc,
          password: passwordref.current.value, 
        }
      });
      if(res.data.email){
        alert('Added Successfully')
      }
      else{
        alert("Something Went Wrong!..")
      }
    }

    //reset
    emailref.current.value=''
    passwordref.current.value=''
    nameref.current.value=''
    numberef.current.value=''
    setLoc()
  }

  
  return (
    <Container style={{maxWidth: '400px', marginTop:'50px'}}>
      <Card>
        <Card.Body>
          <Card.Title>Add New Driver</Card.Title>
          <hr/>
          <h4>Username</h4>
          <input placeholder="Enter username" type='text' ref={nameref} required/>
          <h4>Enter email</h4>
          <input placeholder="Enter email" type='email' ref={emailref} required/>
          <h4>Password</h4>
          <input placeholder="Enter Password" type='password' ref={passwordref} required/>
          <h4>Number</h4>
          <input placeholder="Enter number" type='number' ref={numberef} required/>
          <h4>City</h4>
          <input type='radio' onClick={()=>setLoc('Hyderabad')} /> Hyderabad {' '}
          <input type='radio' onClick={()=>setLoc('Vizag')} /> Vizag {' '}
          <input type='radio' onClick={()=>setLoc('Vijayawada')} /> Vijayawada
          <br/>
          <br/>
          <Button variant="primary" onClick={add}>Add</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
