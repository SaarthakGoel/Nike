import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section id='products'>
      <p className='text-4xl font-bold py-7 font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</p>
      <p className='text-slate-gray font-montserrat text-xl'>Experience top-notch quality and style with our sought-after <br />
       selections. Discover a world of comfort, design, and value</p>
      <div className='grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 pb-5 pr-10'>
        {
          products.map((product) => (
            <PopularProductsCard imageUrl={product.imgURL}
            rating={product.rating}
            price={product.price}
            name={product.name} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts