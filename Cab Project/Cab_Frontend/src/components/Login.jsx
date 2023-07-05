import React, { useRef } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { isUserLoggedIn,isAdminLoggedIn,isEmployeeLoggedIn } from '../atoms';
import { useLocation } from 'react-router-dom';
import { validateData } from '../utils/validate'
import { auth } from '../utils/auth';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [isULoggedIn, setIsULoggedIn] = useRecoilState(isUserLoggedIn);
  const [isALoggedIn, setIsALoggedIn] = useRecoilState(isAdminLoggedIn);
  const [isELoggedIn, setIsELoggedIn] = useRecoilState(isEmployeeLoggedIn);
  const location = useLocation();
  const loginType = location.pathname[1]
  const emailref = useRef()
  const passwordref = useRef()

  const navigate = useNavigate();


  const signin=async()=>{
    const isValid=validateData(emailref.current.value,passwordref.current.value)
    if(!isValid.valid){
      console.log(isValid.error)
    }
    const res=await auth(emailref.current.value,passwordref.current.value,loginType)  
    if(res==='true'){
      switch(loginType){
        case 'u':
          setIsULoggedIn(true)
          break
        case 'a':
          setIsALoggedIn(true)
          break
        case 'e':
          setIsELoggedIn(true)
          break
      }
      window.localStorage.setItem(`${loginType}userToken`,btoa(`${emailref.current.value} ${passwordref.current.value} ${loginType}`))
      alert('Login Success')
    }
    else{
      alert('Invalid Details')
    }
    //reset
    emailref.current.value=''
    passwordref.current.value=''
  }

  if(isULoggedIn && loginType=='u'){
    navigate("/uhome");
  }

  if(isALoggedIn && loginType=='a'){
    navigate("/ahome");
  }

  if(isELoggedIn && loginType=='e'){
    navigate("/ehome");
  }

  return (
    <Container style={{maxWidth: '400px', marginTop:'50px'}}>
      <Card>
        <Card.Body>
          <Card.Title>
            {loginType==='a' && 'Admin '}
            {loginType==='u' && 'User '}
            {loginType==='e' && 'Employee '}
             Login
          </Card.Title>
          <hr/>
          <h4>Enter username / email</h4>
          <input placeholder="Enter username" type='email' ref={emailref} required/>
          <h5>Password</h5>
          <input placeholder="Enter Password" type='password' ref={passwordref} required/>
          <br/>
          <br/>
          {loginType==='u' && <p>Create an acccount <a href='/signup'>Signup</a> </p>}
          <Button variant="primary" onClick={signin}>Sign In</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
