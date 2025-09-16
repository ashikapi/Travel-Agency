import React from 'react'
import Heros from '../pages/Heros'
import Neog from '../pages/Neog'
import AmaderSomporke from '../pages/AmaderSomporke'

const Home = () => {
  return (
   <>
   {/* scroll section for  clicking on the navbar links */}
   <div>
    <section id='hero' className='scroll-mt-20'><Heros/></section>
    <section id='neog' className='scroll-mt-10'><Neog/></section>
    <section id='amadersomporke'><AmaderSomporke /></section>
    <section></section>
    <section></section>
   </div>
   </>
  )
}

export default Home