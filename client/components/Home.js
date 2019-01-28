import React from 'react'
import { homePage, logo } from '../../public/index.css'
import imageLogo  from '../../public/Images/companyLogo.png'

const Home = () => (
  <div className={ homePage }>
    <div className={ logo }>
      <img src={ imageLogo } alt="logo"/>
    </div>
  </div>
)

export default Home
