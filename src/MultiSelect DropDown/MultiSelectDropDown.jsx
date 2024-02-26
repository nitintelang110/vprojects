
import React, { useState } from "react";
import './MultiSelectionDropDown.css';
import { redirect } from "react-router-dom";




const MultiSelectDropDown = () => {


  const options = [
    
    'Blue',
    'Red',
    'Green',
    'Pink',
    'violet',
    'yellow',
    'gray',
    'magenta',
    'purple'

    // Add more options as needed
  ];
  

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [choose, setChoose] = useState([]);



  const handleOptionChange = (option) => {

setChoose(selectedOptions.filter((item) => item !== option))

    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // If selected, remove it from the array
    
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If not selected, add it to the array
      setSelectedOptions([...selectedOptions, option]);
    }
  };


  const handleDelete = (option)=>{
    
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }else{
      setSelectedOptions([...selectedOptions, option]);
    }
};
  

  return (

    <>

    <div className='multiselect_container'>

<div>



      <label>Select Options:</label>

      <div className="selectedlistcontainer">
       
        <ul className="selected_container">
        
          {selectedOptions.map((option) => (
           
            <li key={option+1} className="selected" >{option} <span className="closebtn" onClick={() => handleDelete(option)}>x</span></li>
          ))}
        </ul>
      </div>

      <select
        multiple
        value={selectedOptions}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        
        {options.map((option) => (
          
          <option key={option} value={option}>
            
            {option}
          </option>
        ))}
      </select>

   
    
    
    </div>

   
       
    </div>
     <div className="slectedcolor">

  

{selectedOptions.map((option,id) => (
           
      <div key={id} style={{backgroundColor:option}} className="selectedcolorbox">{option}</div>
         ))}
    
     </div>

     </>
  )
}

export default MultiSelectDropDown;