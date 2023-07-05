import React, { useEffect, useState } from 'react'
import { Button, Container, Card, Row } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { isUserLoggedIn, userData } from '../../atoms';
import { getUser } from '../../utils/getUsers';
import Logout from '../Logout';
import BookRide from './BookRide';
import CurrentRide from './CurrentRide';
import Rides from './Rides';
import { auth } from '../../utils/auth';

export default function UserHome() {
  const [uData, setUData] = useRecoilState(userData);
  const [isULoggedIn, setIsULoggedIn] = useRecoilState(isUserLoggedIn);

  const [tab,setTab]=useState('status')

  useEffect(()=>{
    const loaddata=async()=>{
      const uuserToken=window.localStorage.getItem('uuserToken')
      if(uuserToken){
        let uuser = atob(uuserToken).split(' ')
        let ures= await auth(uuser[0],uuser[1],uuser[2])
        setUData(uuser[0])
      }
    }
    loaddata()
  },[isULoggedIn])

  const [user,setUser]=useState()

  useEffect(()=>{
    const fetchData=async()=>{
        let data=await getUser(uData)
        setUser(data)
    }
    fetchData()
  },[uData])

  return (
    <>
        <Container>
            <Card style={{maxWidth:'500px',width:'100%',margin:'20px auto',padding:'10px'}}>
                <h3>User Dashboard</h3>
                <Card.Title>Hey {user&&user?.name} {uData?<Logout userType={'u'} />:<Button href='/ulogin'>Login</Button>}</Card.Title>
                <hr/>
                {
                    uData?
                    <Card.Body>
                        <Button onClick={()=>setTab('status')}>Last Service Status</Button>{' '}
                        <Button onClick={()=>setTab('book')}>Book service</Button>{' '}
                        <Button onClick={()=>setTab('history')}>View History</Button>
                    </Card.Body>:
                    <p>You are not logged in to view content. Please do login.</p>
                }
            </Card>
            {
                uData&&<>
                  {
                    tab=='book'&&<BookRide uData={uData} />
                  }
                  {
                    tab=='history'&&<Rides/>
                  }
                  {
                    tab=='status'&&<CurrentRide uData={uData}/>
                  }
                </>
            }
        </Container>
    </>
  )
}
