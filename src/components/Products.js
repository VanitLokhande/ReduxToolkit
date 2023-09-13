import React from 'react'
import {useEffect,useState} from 'react';
import { add } from '../store/cartslice';
import { useDispatch } from 'react-redux';

const Products = () => {

  const dispatch = useDispatch();
  const [product,setproduct]=useState([]);



  useEffect(()=>{
    const fetchproducts = async()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setproduct(data);
    }
    fetchproducts()
  },[])

  const handleAdd=(product)=>{
      dispatch(add(product))
  }
  return (
    <div className='productWraper'>
       { product && product.map((item)=>{
        return<div className="cart">
          <h4>{item.title}</h4>
          <img src={item.image}/>
          
          <h5>Rs-{item.price}</h5>
          <button className='btn' onClick={()=>handleAdd(item)}>Add to Cart</button>
        </div>
      })} 
    </div>
  )
}

export default Products
