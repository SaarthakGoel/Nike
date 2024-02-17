import React from 'react'
import ClickMe from '../components/ClickMe'

const Subscribe = () => {
  return (
    <section className='flex flex-row justify-between items-center max-lg:flex-col gap-10' id="contact-us">
      <div>
        <p className='text-4xl font-palanquin font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</p>
      </div>
      <div className='border-[1px] border-slate-gray rounded-full flex pr-3 pl-4 py-2'>
        <input type="text" placeholder='subscribe@nike.com' className='input '/>
        <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-[#ff5500] rounded-full text-white border-[#ff5500]'> Sign Up </button>
      </div>
    </section>
  )
}

export default Subscribe