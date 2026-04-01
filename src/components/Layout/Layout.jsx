import React from 'react'
import Header from './Header'
import styles from './layout.module.css'
const Layout = ({children}) => {
  return (
    <>
       <Header/>
        <div className="w-100">
  <img
    src="/food-header.jpg"
    alt="banner"
    className="img-fluid w-100"
    style={{ height: "300px", objectFit: "cover" }}
  />
</div>
        {children}
    </>
  )
}

export default Layout