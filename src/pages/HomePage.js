import React from 'react'
import {FeaturedProducts, Hero, Services, Contact} from '../components';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage