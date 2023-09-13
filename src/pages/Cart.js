import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {remove} from '../store/cartslice'


const Cart = () => {
  const usedispatch=useDispatch();

  const products = useSelector(state=>state.cart)
  console.log("oooo",products);

  const handleremove=(productid)=>{
    usedispatch(remove(productid))
  }
  return (
    <div>
       <h2>Cart</h2>
       <div> 
        {
            products.map((product)=>{
            return<div className='cart' style={{margin:"10px", }}>
              <h4>{product.title}</h4>
              <img src={product.image}/>
              
              <h5>Rs-{product.price}</h5>
              <button className='btn' onClick={()=>handleremove(product.id)} >Remove From Cart</button>
            </div>
          })
        }
        </div>
      
    </div>
  )
}

export default Cart
