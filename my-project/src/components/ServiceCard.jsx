import React from 'react'

const ServiceCard = ({imgURL , label , subtext}) => {
  return (
    <div className='flex flex-col flex-1 mx-10 shadow-3xl rounded-[20px] px-10 py-16 sm:w-[300px] sm:min-w-[300px] my-5'>
      <div className='bg-coral-red w-12 h-12 rounded-full flex justify-center items-center m-5'>
      <img src={imgURL} />
      </div>
      <p className='pb-6 pt-1 font-semibold text-3xl font-palanquin'>{label}</p>
      <p className='text-slate-gray text-lg leading-7 font-montserrat'>{subtext}</p>
    </div>
  )
}

export default ServiceCard