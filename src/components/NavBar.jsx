import React, { useContext, useState } from 'react'
import { Badge, Button, Container, Navbar } from 'react-bootstrap'
import { ShoesContext } from '../context/shoes/ShoesContext';
import CartItems from './CartItems';

const NavBar = () => {
   const {cartItems}=useContext(ShoesContext);
   const [showModal,setShowModal]=useState(false);
  return (
     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#" >Shoes</Navbar.Brand>
          <Button variant="light" onClick={()=>setShowModal(true)}>
      Cart <Badge bg="dark" text="light">{cartItems.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
        </Container>
        {showModal && <CartItems show={showModal} onHide={()=>setShowModal(false)} />}
      </Navbar>
  )
}

export default NavBar