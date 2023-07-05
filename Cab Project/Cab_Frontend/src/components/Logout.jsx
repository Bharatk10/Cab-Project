import React from 'react'
import { Button } from 'react-bootstrap'

export default function Logout({userType}) {
    const logout=()=>{
      window.localStorage.removeItem(`${userType}userToken`)
      window.location.reload()
    }
  return (
    <Button variant='danger' onClick={logout} className='logout'>Logout</Button>
  )
}
