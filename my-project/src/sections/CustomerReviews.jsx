import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center pb-20'>
        <p className='font-bold text-4xl font-palanquin py-5'>What Our <span className=' text-coral-red'>Costumer</span> Say?</p>
        <p className='text-slate-gray text-xl font-light font-montserrat max-w-[600px] text-center leading-7'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className='flex-1'>
        <div className='flex gap-52 flex-row max-md:flex-col'>
          {
            reviews.map((review) => (
              <ReviewCard key={review.customerName}
              {...review} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews