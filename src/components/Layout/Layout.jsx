import React from 'react'
import Header from './Header'
import styles from './layout.module.css'
import HeroSection from './HeroSection'
import CartModal from './CartModal'
import CartItems from '../Cart/CartItems'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <CartModal>
        <CartItems />
      </CartModal>
      {/* header image  */}
      <HeroSection />
      {children}
    </>
  )
}

export default Layout