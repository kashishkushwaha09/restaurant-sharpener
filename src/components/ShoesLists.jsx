import React, { useContext } from 'react'
import { ShoesContext } from '../context/shoes/ShoesContext'
import ShoeCard from './ShoeCard';

const ShoesLists = () => {
    const {items,recommended}=useContext(ShoesContext);
     console.log(items);
  return (
     <div className="container mt-4">
      <div className="row">
           {items.length>0 && items.map((item)=>(
            <ShoeCard key={item.id} shoe={item} />
           ))}
          
      
      </div>
      {recommended.length>0 && <h1 className='text-white'>Based On Cart Items recommendation for you </h1>}
      <div className="row">
           {recommended.length>0 && recommended.map((item)=>(
            <ShoeCard key={item.id} shoe={item} />
           ))}
          
      
      </div>

    </div>
  )
}

export default ShoesLists