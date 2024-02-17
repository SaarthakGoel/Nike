import React from 'react'
import { offer } from '../assets/images'
import ClickMe from '../components/ClickMe'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex flex-row max-lg:flex-col justify-center items-center'>
      <div className='flex-1'>
        <img src={offer} />
      </div>
      <div className='flex-1 ml-10'>
        <p className='text-4xl font-palanquin font-bold py-3'><span className='text-coral-red '>Special</span> Offer</p>
        <p className='text-slate-gray font-montserrat text-xl py-3 font-light leading-7'>Embark on a shopping journey that redefines your experience with unbeatable deals.
           From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='text-slate-gray font-montserrat text-xl py-3 font-light leading-7'>Navigate a realm of possibilities designed to fulfill your unique desires,
            surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex justify-left pt-6'>
          <ClickMe label="Shop now" iconUrl={arrowRight} />
          <button className='flex ml-5 justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border-[1px] text-slate-gray border-slate-gray'>Learn More</button>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffers