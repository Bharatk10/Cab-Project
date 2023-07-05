import React, { useRef } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { validateSignupData } from '../utils/validate'
import axios from 'axios'
import { auth } from '../utils/auth'
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil'
import { isUserLoggedIn } from '../atoms'

export default function Signup() {
  const navigate = useNavigate();
  const [isULoggedIn, setIsULoggedIn] = useRecoilState(isUserLoggedIn);

  const emailref = useRef()
  const passwordref = useRef()
  const nameref = useRef()
  const numberef = useRef()

  const signup=async()=>{
    //call api
    const res=validateSignupData(emailref.current.value,passwordref.current.value,nameref.current.value,numberef.current.value)
    if(res.valid){
      const res=await axios({
        method: 'post',
        url: `http://localhost:8080/backend/user`,
        headers: {}, 
        data: {
          email: emailref.current.value, 
          name: nameref.current.value, 
          number: numberef.current.value,
          userType: "user",
          password: passwordref.current.value, 
        }
      });
      if(res.data.email){
        const result= await auth(emailref.current.value,passwordref.current.value,'u')
        if(result==='true'){
          window.localStorage.setItem(`uuserToken`,btoa(`${emailref.current.value} ${passwordref.current.value} u`))
          alert('Signup Success')
          navigate("/uhome");
        }
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
  }

  if(isULoggedIn){
    navigate("/uhome");
  }
  
  return (
    <Container style={{maxWidth: '400px', marginTop:'50px'}}>
      <Card>
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          <hr/>
          <h4>Username</h4>
          <input placeholder="Enter username" type='text' ref={nameref} required/>
          <h4>Enter email</h4>
          <input placeholder="Enter email" type='email' ref={emailref} required/>
          <h4>Password</h4>
          <input placeholder="Enter Password" type='password' ref={passwordref} required/>
          <h4>Number</h4>
          <input placeholder="Enter number" type='number' ref={numberef} required/>
          <br/>
          <br/>
          <p>Create an acccount <a href='/login'>Login</a> </p>
          <Button variant="primary" onClick={signup}>Sign Up</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
