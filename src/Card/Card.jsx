import React, { useState } from 'react'

import './Card.css'






 const Card = ({id,title,view,source,description,alert}) => {

  const [descriptions,setDescriptions] = useState(description)
 

  
  const handleUrl = (url) => {
    alert(url)
  }

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
        <button className='btn_view' onClick = {()=>handleUrl(view)}>view</button>
         <button  className='btn_source'>source</button>
        </div>
    </div>
    </>
  )

}

export {Card}









