import React from 'react'
import Hero from './Hero'
import What from './What'
import Coreproducts from './Coreproducts'
import Why from './Why'
import TransformerSection from './Why'
import Features from './Features'
import Why2 from './Why2'
import About from './About'
import Integration from './Integration'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Features2 from './Features2'

const App = () => {
  return (
    
    <div className='bg-[#eef0f1] w-full min-h-screen relative '>
            
  {/* Dashed Grid */}
 
  {/* Your Content/Components */}

    <Hero/>
    <Features/>
    <Why2/>
    <Coreproducts/>
        <Integration/>
   
    <Features2/>

     

    {/* <Testimonial/> */}
   
     
    <Footer/>
    
    
    </div>
    
  )
}

export default App