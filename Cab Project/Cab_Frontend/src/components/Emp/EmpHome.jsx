import React,{useState,useEffect} from 'react'
import { Container,Card,Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { empData, isEmployeeLoggedIn } from '../../atoms';
import Logout from '../Logout';
import { getEmp } from '../../utils/getEmps';
import Requests from './Requests';
import AcceptedRides from './AcceptedRides';
import { auth } from '../../utils/auth';
import History from './History';

export default function EmpHome() {
  const [eData, setEData] = useRecoilState(empData);

  const [isELoggedIn, setIsELoggedIn] = useRecoilState(isEmployeeLoggedIn);

  const [tab,setTab]=useState('requests')

  useEffect(()=>{
    const loaddata=async()=>{
      const euserToken=window.localStorage.getItem('euserToken')
      if(euserToken){
        let euser = atob(euserToken).split(' ')
        let eres= await auth(euser[0],euser[1],euser[2])
        setEData(euser[0])
      }
    }
    loaddata()
  },[isELoggedIn])


  const [emp,setEmp]=useState()

  useEffect(()=>{
    const fetchData=async()=>{
      let data=await getEmp(eData)
      setEmp(data)
    }
    fetchData()
  },[eData])

  return (
    <>
      <Container>
        <Card style={{maxWidth:'500px',width:'100%',margin:'20px auto',padding:'10px'}}>
            <h2>Employee Dashboard</h2>
            <Card.Title>Hey {eData&&emp?.name} {' '} {eData?<Logout userType={'e'} />:<Button href='/elogin'>Login</Button>}</Card.Title>
            <hr/>
            {
              eData?
              <Card.Body>
                  <Button onClick={()=>setTab('requests')}>Your Requests</Button>{' '}
                  <Button onClick={()=>setTab('accepted')}>Accepted Requests</Button>{' '}
                  <Button onClick={()=>setTab('history')}>Your History</Button>
              </Card.Body>:
              <p>You are not logged in to view content. Please do login.</p>
            }
          </Card>
          {
            eData&&<>
              {
                tab=='requests'&& <Requests eid={eData}/>
              }
              {
                tab=='accepted'&& <AcceptedRides eid={eData}/>
              }
              {
                tab=='history'&& <History eid={eData}/>
              }
            </>
          }
      </Container>
    </>
  )
}
