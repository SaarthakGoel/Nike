import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row flex-wrap justify-between gap-20 mb-10 max-lg:flex-col'>
        <div className='max-w-[400px]'>
          <a href='#home'> <img src={footerLogo}  alt='logo' width={150} height={46} /> </a>
          <p className='text-[#cfc2c2] font-montserrat leading-7 py-5'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex'>
            {
              socialMedia.map((icon) => (
                <div className='bg-white rounded-full h-11 w-11 flex justify-center items-center mr-5 mt-2 cursor-pointer'>
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))
            }
          </div>
        </div>
        <div className=' flex-1 flex flex-row flex-wrap gap-40' >
        {
          footerLinks.map((obj) => (
            <div className='flex-1'>
              <ul>
                <li className='text-white text-2xl pb-5 font-montserrat '>{obj.title}</li>
                {obj.links.map((link) => (
                  <li className='text-[#cfc2c2] font-montserrat leading-10 cursor-pointer hover:text-[#6c6868]'>{link.name}</li>
                ))}
              </ul>
            </div>
          ))
        }
        </div>
      </div>
      <div className='flex max-md:flex-col max-md:justify-center max-md:items-center'>
        <p className='text-[#ebe1e1] flex-1 font-montserrat text-xl cursor-pointer'>&#169;Copyright. All rights reserved.</p>
        <p className='text-[#ebe1e1] font-montserrat text-xl cursor-pointer'>Terms & Conditions</p>
      </div>
    </section>
  )
}

export default Footer