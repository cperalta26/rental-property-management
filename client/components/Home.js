import React from 'react'
import style from '../../public/index.css'
import imageLogo  from '../../public/Images/companyLogo.png'

const Home = () => (
  <header className={ style.header }>
    <div className={ style.logo }>
      <img src={ imageLogo } alt="logo"/>
      <div className={ style.blockOne }>x</div>
    </div>
  </header>
)

export default Home
