import React from 'react'
import AppNavBar from './AppNavBar'
import  Card  from './Card'
import './Style.css'
export const Services = () => {
  return (
    <div >
    <AppNavBar />
     <div className='services'> <h1 className='serheading'>Services</h1>
     <Card/></div>
    </div>
  )
}
