import React, { useContext } from 'react'
import { ShoesContext } from '../context/shoes/ShoesContext';
import { Button, Modal } from 'react-bootstrap';
import CardWrapper from './UI/CardWrapper';
const CartCard=({item})=>{
  const obj={
    "id": 1,
    "price": 400,
    "name": "Nike Air Max",
    "largeQuantity": 1,
    "mediumQuantity": 1,
    "smallQuantity": 1,
    "totalPrice": 1200
}

return (
   <CardWrapper  isCart={true} >
    

         <div className="d-flex gap-5 justify-content-evenly align-items-center">
           <h5 className="card-title fw-bold text-white mb-0">{item?.name}</h5>
  {item.largeQuantity>0 && <span className="rounded-3 bg-dark p-2">
    Buy L ({item.largeQuantity})
  </span>}

  {item.mediumQuantity>0 && <span className="rounded-3 bg-secondary p-2" >
    Buy M ({item.mediumQuantity})
  </span>}

  {item.smallQuantity>0 && <span className="rounded-3 bg-warning p-2" >
    Buy S ({item.smallQuantity})
  </span>}
     <h5 className="card-title fw-bold text-white mb-0 ms-auto">₹ {item?.totalPrice}</h5>
   </div>
   </CardWrapper>
)
}
const CartItems = ({show,onHide}) => {
     const {cartItems}=useContext(ShoesContext);
  return (
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
                   {cartItems.length>0 && cartItems.map((item)=>(
                    <CartCard key={item.id} item={item} />
                   ))}
                  
              
              </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='secondary'>Close</Button>
        <Button onClick={onHide} variant='warning'>Order</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CartItems