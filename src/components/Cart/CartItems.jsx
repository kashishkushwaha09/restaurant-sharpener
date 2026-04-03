import React from 'react'

const CartItems = () => {
  return (
    <div className="bg-white p-4 rounded-3" style={{ width: "400px" }}>
          <h6 className='text-muted fw-semibold'>Shushi</h6 >
          <div className="d-flex justify-content-between align-items-center my-3 fw-bold">
            <h6 className='fw-bold'>Total Amount</h6>
            <h6 className='fw-bold'>$0.00</h6> 
          </div>
          
          <div className="d-flex justify-content-end gap-3">
            <button className="btn close-btn rounded-pill px-4 py-0 fw-medium shadow border">Close</button>
            <button className="btn add-btn rounded-pill px-4 py-1">Order</button>
          </div>
        </div>
  )
}

export default CartItems