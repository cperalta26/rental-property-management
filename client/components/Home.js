import React from 'react'
import { header, logo } from '../../public/index.css'
import imageLogo  from '../../public/Images/companyLogo.png'

const Home = () => (
  <header className={ header }>
    <div className={ logo }>
      <img src={ imageLogo } alt="logo"/>
    </div>
  </header>
)

export default Home
