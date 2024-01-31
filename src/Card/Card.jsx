import React, { useState } from 'react'

import './Card.css'




const handleUrl = (url) => {
  window.location.href = url;
}

 const Card = ({id,title,view,source,description,alert}) => {

  const [descriptions,setDescriptions] = useState(description)
 

  


  return (
    <>
 
  
    <div className='card_container'>
        <div className='num'>
            {id}
        </div>
        <div className='headings'>
        {title}
        </div>
        <div className="btn">
        
        <button className='btn_desc' onClick={()=>alert(descriptions)}>description</button>
        <button className='btn_view' onClick = {alert("hello")}>view</button>
         <button  className='btn_source'>source</button>
        </div>
    </div>
    </>
  )

}

export {Card}









