import React from 'react'
import Header from './Header'
import styles from './layout.module.css'
const Layout = ({children}) => {
  return (
    <>
       <Header/>
        <div className="w-100  position-relative">
  <img
    src="/food-header.jpg"
    alt="banner"
    className="img-fluid w-100"
    style={{ height: "300px", objectFit: "cover" }}
  />
  <div className="card text-bg-dark mb-3 w-50 position-absolute top-100 start-50 p-2 rounded-3 translate-middle shadow" >
  
  <div class="card-body text-center"> 
     <h1>Delicious Food, Delivery To You</h1>
    <p className='mt-4'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious dining lunch or dinner at home.</p>
    <p>All our meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs!</p>
  </div>
</div>
</div>
        {children}
    </>
  )
}

export default Layout