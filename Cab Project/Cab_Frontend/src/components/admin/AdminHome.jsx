import React,{useState,useEffect} from 'react'
import { auth } from '../../utils/auth'
import { Button, Container, Table, Modal, Form,Card } from 'react-bootstrap'
import AllRides from './AllRides'
import Requests from './Requests'
import { adminData, isAdminLoggedIn } from '../../atoms'
import { useRecoilState } from 'recoil'
import Logout from '../Logout'
import Drivers from './Drivers'
import Users from './Users'
import NewDriver from './NewDriver'

export default function AdminHome() {
  const [isALoggedIn, setIsALoggedIn] = useRecoilState(isAdminLoggedIn);
  const [aData, setAData] = useRecoilState(adminData);

  const [tab,setTab]=useState('requests')

  useEffect(()=>{
    const loaddata=async()=>{
      const auserToken=window.localStorage.getItem('auserToken')
      if(auserToken){
        let auser = atob(auserToken).split(' ')
        let ares= await auth(auser[0],auser[1],auser[2])
        setAData(auser[0])
      }
    }
    loaddata()
  },[isALoggedIn])
  

  return (
    <>
      <Container>
        <Card style={{maxWidth:'500px',width:'100%',margin:'20px auto',padding:'10px'}}>
          <h2>Admin Dashboard</h2>
          <Card.Title>Hey {aData&&'Admin '} {' '} {aData?<Logout userType={'a'} />:<Button href='/alogin'>Login</Button>}</Card.Title>
          <hr/>
          {
            aData?
            <Card.Body>
                <Button onClick={()=>setTab('requests')}>Raised Requests</Button>{' '}
                <Button onClick={()=>setTab('all')}>All Requests</Button>{' '}<br/><br/>
                <Button onClick={()=>setTab('drivers')}>Drivers</Button>{' '}
                <Button onClick={()=>setTab('newDriver')}>New Driver</Button>{' '}
                <Button onClick={()=>setTab('users')}>Users</Button>
            </Card.Body>:
            <p>You are not logged in to view content. Please do login.</p>
          }
        </Card>
        {
          aData&&<>
            {
              (tab=='requests')&& <Requests/>
            }
            {
              (tab=='all') && <AllRides/>
            }
            {
              (tab=='users') && <Users/>
            }
            {
              (tab=='drivers') && <Drivers/>
            }
            {
              (tab=='newDriver') && <NewDriver/>
            }
          </>
        }
        
      </Container>
    </>
  )
}
