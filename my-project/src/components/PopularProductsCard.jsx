import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imageUrl , rating , price , name}) => {
  return (
    <div className='px-7'>
      <img src={imageUrl} alt='photo' />
      <div className='flex gap-3 py-5'>
      <img src={star} className='h-[28px]'/>
      <p className='text-xl text-slate-gray'>({rating})</p>
      </div>
      <p className=' text-2xl font-semibold pb-5'>{name}</p>
      <p className='text-2xl text-coral-red font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductsCard