import React from 'react'

const CardWrapper = ({children,isCart}) => {
  return (
     <div className={`${isCart? "col-12" : "col-md-4"}  mb-4`}>
      <div className="card h-100 shadow-sm text-white border-none">
        <div className="card-body">
          {children}
        </div>

       
      </div>
    </div>
  )
}

export default CardWrapper