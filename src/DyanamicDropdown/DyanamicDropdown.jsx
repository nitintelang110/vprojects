import React, { useState } from 'react';
import './DyanamicDropdown.css';

import { Country,State,City }  from 'country-state-city';

export const DyanamicDropdown = () => {

//for country
    const [country, setCountry] = useState(Country.getAllCountries());
    const [selectCountry, setSelectCountry] = useState('');

   
//for state
    const [state, setState] = useState(State.getAllStates());
const [selectState, setSelectState] = useState('');

//for city
    const [city, setCity] = useState(City.getAllCities());
    const [selectCity, setSelectCity] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        if(setSelectCountry === '' && setSelectState === '' && setSelectCity === ''){alert("Please Select All Fields")}else{
            alert(`Country = ${selectCountry}, State =${selectState}, City = ${selectCity}`)
        }
        
 }
 
    const handleReset = () => {
   
   
          setSelectState(''),
            setSelectCity(''),
         setSelectCountry('')
 }
  return (
    <div className='dropdown-container'>
          <div className='dropdown-header'>
              <div className="head-text">
                  <h2 className='main-head'>Dependent Dyanamic Drop-Down</h2>
                  <h3 className='sub-head'>State-District-City</h3>
              </div>
          </div>
           <div className='dropdowns'>
              <div className="states">
                <p className="labels">Country</p>
                  <select className='selects' name="country" id="" onChange={(e)=>setSelectCountry(e.target.value)} >
                      <option className='options' value={''} key="">--Select--</option>
                      {
                          country.map((data, id) => {
                              return (
                                  <option key={id} value={data.isoCode}>{data.name}</option>
                              )
                          })
                     }
                  </select>
                  </div>
                  <div className="district">
                  <p className="labels">State</p>
                     <select className='selects' name="state" id="" onChange={(e)=>setSelectState(e.target.value)} >
                  <option className='options' value={''} key="">--Select--</option>
                  
                 
                  {
                      state.filter((c) => { return selectCountry !== c.countryCode ? '' : c.name }).map((data, id) => {
                             return (
                                  <option key={id} value={data.isoCode}>{data.name}</option>
                              )
                          })
                     }
                  </select></div>
              <div className="city">
              <p className="labels">City</p>
                   <select className='selects' name="city" id="" onChange={(e)=>setSelectCity(e.target.value)} >
                      <option className='options' value={''} key="">--Select--</option>

                   
                  {
                      city.filter((cit) => { return selectState !== cit.stateCode  ? '' : cit.name }).map((citydata, id) => {
                             return (
                                  <option key={id} value={citydata.name}>{citydata.name}</option>
                              )
                          })
                     }

                  </select>
                  </div>
          </div>
          <div className="btnGroup">

          <button className='sbmt_btn' onClick={handleReset}>Reset</button>
          <button className='sbmt_btn' onClick={handleSubmit}>Submit</button>
         
          </div>
    </div>
  )
}


