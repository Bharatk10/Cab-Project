import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='app-body'>
      <h2>Welcome to Car service Booking</h2>
        <div className='user-card'>
          <Card >
            <Card.Body>
              <Card.Title>For Customer</Card.Title>
              <Button href='/ulogin'>Login</Button>{' '}
              <Button href='/signup'>Signup</Button>
            </Card.Body>
          </Card>
        </div>
      <div>
        <Card className='service-card'>
          <Card.Body>
            <div className='logins'>
              <div>
                <Card.Title>For Employee</Card.Title>
                <Button href='/elogin'>Employee Login</Button>
              </div>
              <div>
                <Card.Title>Admin Login</Card.Title>
                <Button href='/alogin'>Admin Login</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
