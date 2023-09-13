import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color:"black"}}>ReduxToolkit</h1>
      <section>
        <h2>Products</h2>
        <Products/>
      </section>
    </div>
  )
}

export default Home
