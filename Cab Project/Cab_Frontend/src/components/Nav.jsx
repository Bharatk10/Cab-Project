import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap'

export default function Nav() {
  return (
    <div>
        <Navbar style={{position: 'sticky',top: '0',zIndex:'2', color:'white',justifyContent:'space-between',padding:'10px'}} expand="lg" bg='dark' variant='dark'>
          <Navbar.Brand>Car Booking Service</Navbar.Brand>
        </Navbar>
    </div>
  )
}
