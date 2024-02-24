
import React, { useState } from "react";
import './MultiSelectionDropDown.css';




const MultiSelectDropDown = () => {


  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    // Add more options as needed
  ];
  

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // If selected, remove it from the array
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If not selected, add it to the array
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className='multiselect_container'>

<div>



      <label>Select Options:</label>

      <div className="selectedlistcontainer">
       
        <ul className="selected_container">
          {selectedOptions.map((option) => (
            <li key={option} className="selected">{option} <span className="closebtn">x</span></li>
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
  )
}

export default MultiSelectDropDown;