import React from 'react'
import './ScrollToSection.css'
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import SectionNavbar from './SectionNavbar/SectionNavbar';

const ScrollToSection = () => {
  return (
    <div className='scrolltosection_container'>
      <SectionNavbar/>
      
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      </div>
  )
}

export default ScrollToSection;