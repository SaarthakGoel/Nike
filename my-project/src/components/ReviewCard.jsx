import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL , customerName , rating , feedback}) => {
  return (
    <div className='flex flex-col justify-between items-center'>
      <img src={imgURL} className=' h-36 rounded-full' />
      <p className='text-slate-gray text-xl font-light font-montserrat max-w-[400px] text-center leading-7 pb-2 pt-5'>{feedback}</p>
      <div className='flex gap-3 py-3'>
      <img src={star} className='h-[28px]'/>
      <p className='text-xl text-slate-gray'>({rating})</p>
      </div>
      <p className='text-3xl font-bold font-palanquin'>{customerName}</p>
    </div>
  )
}

export default ReviewCard