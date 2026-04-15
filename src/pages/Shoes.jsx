import React from 'react'
import NavBar from '../components/NavBar'
import AddItem from '../components/AddItem'
import ShoesLists from '../components/ShoesLists'

const Shoes = () => {
  return (
    <div className='shoes container-fluid p-0'>
        <NavBar/>
        <AddItem/>
        <ShoesLists/>
    </div>
  )
}

export default Shoes