import React,{useEffect, useState} from 'react'
import './iscroll.css'



const InfiniteScroll = () => {


const [data,setData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [record,setRecord] = useState(1)


useEffect(()=>{
 async function fetchData(){
  let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${record}/photos`)
  let responseData = await res.json() 
setIsLoading(false)
  setData((prev)=>{
    return [...prev, ...responseData]
  })

}

fetchData();
},[record])


function handleScroll(){
  //ht of the area already scrolled
  const scrollTop = document.documentElement.scrollTop;
  
  //ht entire webpage
  const scrollHeight = document.documentElement.scrollHeight;
  
  //ht of the current window
  const clientHeight = document.documentElement.clientHeight;
 
  if(scrollTop + clientHeight >= scrollHeight){
    setIsLoading(true)
    setRecord(record + 1)
  }
}

useEffect(()=>{
  window.addEventListener('scroll',handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll)
},[record])
  return (
    <div className='scroll_container'>
      <div className="dataContainer">
{data.map((res,id)=>{
  return(
    <>

    <div className="card" key={id}><h3>Infinite Scrolling</h3><div className="ids">{id+1}</div><div className="titles"></div>{res.title.substr(1,60)}</div>
    </>
  )
})}
      </div>
      <div id='load_msg'>{isLoading?"Page Loding...":''}</div>
    </div>
  )
}

export default InfiniteScroll;
