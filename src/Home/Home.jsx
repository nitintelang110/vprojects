import React, {  useState } from 'react'
import  Card  from '../Card/Card';
import Data from '../Data/Data'

import './Home.css';
import { useNavigate } from 'react-router-dom';


export const Home = () => {

    const [data, setData] = useState(Data)
const [info,setInfo] = useState()
const Navigate = useNavigate()


  const handlemyUrl = () => {
     Navigate('/')
   }
    
  const al = (desc) => {
   const shows = document.getElementById("info_container").style
  setInfo(desc)
  shows.display = 'block'
  document.body.style.overflow = 'hidden'
}

const projectUrl = (view) =>{
  Navigate(view)
}

  function closeShow() {
   const shows = document.getElementById("info_container").style
   shows.display = 'none'
   document.body.style.overflow = 'scroll'
 }

  return (
    <>
      <div id="info_container">
        <div id="data_container">
    <button className="close_btn" onClick={()=>closeShow()}>X</button>
          {info}
        </div></div>
    
    <div className='m_container'>
      <div className="heading">
            <h3>-- NTCODER --</h3>
          </div>
          
          <div className="home_Link">
        <h2 onClick={handlemyUrl}>Welcome To React Mini Project's</h2><br></br>
        <p>Maximum Project's Created Without Any Third Party Library</p>

       
      
          </div>

          <div className="project_card_container">
  
              {
  data.map((data,index)=>{
    return(
      <>
      
       
      <div className="links"  key={index}>
      
      <Card id = {data.id}
           title={data.title} 
          view={data.view} 
          source={data.source}
          description = {data.description}
          alert={al}
          handleUrl={projectUrl}/>



        </div>

      
     
     
      </>
    )
  })
}
              
          </div>
    </div>
    </>
  )
}

 
