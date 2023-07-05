import React, { useEffect, useState } from 'react'
import { bookride } from '../../utils/bookride';
import { Button, Container, Dropdown, Row } from 'react-bootstrap'


export default function BookRide({uData}) {
    
  const [city,setCity]=useState()
  const [pickup,setPickup]=useState()
  const [destination,setDestination]=useState()

  const cities = ["Hyderabad","Vizag","Vijayawada"]
  const hydLocations = ["Gachibowli","Madhapur","Manikonda"]
  const vizagLocations = ["Gajuwaka","R.K.Beach","DwarakaNagar"]
  const vzdLocations = ["Faraserapeta","Gollapudi","Guntur"]

  
  const book=async()=>{
    const res=await bookride(pickup,destination,uData)
    if(res.id){
        setCity()
        setPickup()
        setDestination()
        window.location.reload()
    }
  }

  return (
    <div>
        <hr/>
        <h3>Book your cab service</h3>
            <h4>Choose your city</h4>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {city?city:'--Choose City--'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        cities.map((city)=>{ 
                            return<Dropdown.Item onClick={()=>setCity(city)} >{city}</Dropdown.Item>
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
            <br/>
            <br/>
            {city&& <> <hr/> <h3>Choose Pickup and Destination</h3></>}
            {
                city=='Hyderabad' &&
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {pickup?pickup:'--Choose Pickup Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                hydLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setPickup(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <br/>
                    <br/>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {destination?destination:'--Choose Destination Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                hydLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setDestination(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                
            }
            {
                city=='Vizag' &&
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {pickup?pickup:'--Choose Pickup Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                vizagLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setPickup(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <br/>
                    <br/>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {destination?destination:'--Choose Destination Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                vizagLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setDestination(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            }
            {
                city=='Vijaywada'&&
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {pickup?pickup:'--Choose Pickup Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                vzdLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setPickup(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <br/>
                    <br/>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {destination?destination:'--Choose Destination Point--'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                vzdLocations.map((city)=>{ 
                                    return<Dropdown.Item onClick={()=>setDestination(city)} >{city}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            }
            {
                (pickup && destination) && <>
                    <hr/>
                    <Button onClick={()=>book()} >Submit</Button>
                </>
            }
    </div>
  )
}
