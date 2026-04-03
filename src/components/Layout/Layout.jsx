import React from 'react'
import Header from './Header'
import styles from './layout.module.css'
import HeroSection from './HeroSection'
import CartModal from './CartModal'
import CartItems from '../Cart/CartItems'
import { useState } from 'react'
const Layout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Header onShowCart={() => setShowCart(true)} />
        {showCart && 
      <CartModal>
        <CartItems onClose={() => setShowCart(false)}  />
      </CartModal>}
      {/* header image  */}
      <HeroSection />
      {children}
    </>
  )
}

export default Layout