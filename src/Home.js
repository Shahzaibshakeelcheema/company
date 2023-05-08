import React from 'react'
import AppNavBar from './AppNavBar'
import CountryList from './CountryList'

export const Home = () => {
  return (
    <div >
      <AppNavBar />
      <h1>Countries</h1>
      <div><CountryList/></div>
    </div>
  )
}
