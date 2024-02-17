import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='flex flex-row justify-between items-center flex-wrap '>
      {
        services.map((service) => (
          <ServiceCard key={service.label}
          {...service} />
        ))
      }
    </section>
  )
}

export default Services