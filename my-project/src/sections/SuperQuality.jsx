import React from 'react'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex flex-row max-lg:flex-col justify-center'>
      <div className='flex-1 '>
        <p className='text-4xl font-palanquin font-bold pb-5'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</p>
        <p className='text-slate-gray text-xl font-light font-montserrat leading-7 pr-20 tracking-wide pb-10'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='text-slate-gray text-xl font-light font-montserrat leading-7 pr-20 tracking-wide'>Our dedication to detail and excellence ensures your satisfaction</p>
        <button className='flex justify-center items-center my-16 gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-[#ff5500]'>Veiw Details</button>
      </div>
      <div className='flex-1 flex justify-center' >
      <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality