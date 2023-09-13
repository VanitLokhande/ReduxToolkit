import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <>  
       <div style={{display:'flex' ,alignItems:'center', justifyContent:'space-between' }}>
            <span>Redux</span>
            <div>
                <Link className='navlink' to="/Cart">Cart</Link>
                <Link className='navlink' to="/home">Home</Link>
                <span className='cart-I'>Cart Items - {items.length}</span>
            </div>
           
       </div>
    </>
  )
}

export default Navbar
