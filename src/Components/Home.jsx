import React from 'react'
import CardCGPA from './CardCGPA'
import CardGPA from './CardGPA'
import CardPercentage from './CardPercentage'

function Home() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 h-[90vh] space-y-4 md:space-y-0 lg:space-y-0 place-items-center mt-3  lg:mt-0  '>
        <CardGPA/>
        <CardCGPA/>
        <CardPercentage/>
    </div>
  )
}

export default Home