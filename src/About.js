import React from 'react'
import AppNavBar from './AppNavBar'
import "./Style.css"
export const About = () => {
  return (

    <div>
    <AppNavBar/>
    <div className='about'>
    <h2>About Us</h2>
    <p>this is about paragraph.</p>
    </div>
    </div>
  )
}
