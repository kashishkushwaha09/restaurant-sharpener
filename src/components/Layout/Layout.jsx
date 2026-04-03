import React from 'react'
import Header from './Header'
import styles from './layout.module.css'
import HeroSection from './HeroSection'
const Layout = ({children}) => {
  return (
    <>
       <Header/>
       {/* header image  */}
       <HeroSection/>
        {children}
    </>
  )
}

export default Layout