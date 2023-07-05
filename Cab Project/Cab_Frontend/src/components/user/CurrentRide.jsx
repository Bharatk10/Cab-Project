import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function CurrentRide({uData}) {
    const [ride,setRide]=useState()
    useEffect(()=>{
        const fetchRide=async()=>{
            let res=await axios.post(`http://localhost:8080/backend/getallrides/${uData}`).then(response => response.data);
            if(res.length>0){
                res=res.reverse()
                setRide(res[0])
            }
        }
        fetchRide()
    },[uData])

  return (
    <div>
        {
            ride&&<>
                <hr/>
                <h3>Your current booking status..</h3>
                <h5>From {ride?.pickup} to {ride?.destination}</h5>
            </>
        }
        {
            ride?.status=='Request raised'&&
            <p>Please be patience, Driver will assign soon!</p>
        }
        {
            ride?.status=='Pending'&&
            <p>Driver is assigned, waiting for driver approval. Usually Mr.{ride?.driver.name} will accept.</p>
        }
        {
            ride?.status=='Accepted'&&<>
                <p>Mr.{ride?.driver.name} is on his way!...</p>
                <p>For queries call {ride?.driver.number}.</p>
            </>
        }
        {
            ride?.status=='Rejected'&&
            <p>Sorry! Mr.{ride?.driver.name} is rejected</p>
        }
        {
            ride?.status=='Completed'&&
            <p>Great, Reached destination.</p>
        }
    </div>
  )
}
