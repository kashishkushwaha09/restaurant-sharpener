import { useState } from 'react'

import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import CartProvider from './context/CartProvider'

function App() {
  

  return (
    <CartProvider>
     <Layout>
        <Home />
     </Layout>
    </CartProvider>
  )
}

export default App
