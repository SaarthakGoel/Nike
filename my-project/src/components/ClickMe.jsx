import React from 'react'

const ClickMe = ({label , iconUrl}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-[#ff5500] rounded-full text-white border-[#ff5500]'>
      {label}
      <img src={iconUrl}
      alt='arrow-rigth-icon'
      className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}

export default ClickMe