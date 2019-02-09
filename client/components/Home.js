import React from 'react'
import style from '../../public/index.css'
import imageLogo  from '../../public/Images/companyLogo.png'

const Home = () => (
  <header className={ style.header }>
    <div className={ style.logo }>
      <img src={ imageLogo } alt="logo"/>
      <div className={ `${style.blockOne} ${style.moveToRight} ${style.object}` }>x</div>
    </div>
  </header>
)

export default Home
