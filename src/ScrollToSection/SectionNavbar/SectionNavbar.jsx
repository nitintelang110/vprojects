import React from 'react'
import './SectionNavbar.css'


const SectionNavbar = () => {
  return (
    <div className='sectionNavbar_container' id='home'>
       <a className='anch_tag' href="#section1">Section1</a> 
       <a className='anch_tag' href="#section2">Section2</a> 
       <a className='anch_tag' href="#section3">Section3</a> 
       <a className='anch_tag' href="#section4">Section4</a> 
    </div>
  )
}

export default SectionNavbar