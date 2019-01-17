import React from 'react'
import { homePage, logo } from '../../public/index.css'


const Home = () => (
  <div className={ homePage }>
    <div className={ logo }>
      <img src={require('../../public/Images/logo.png')} alt="logo"/>
    </div>
  </div>
)

export default Home
