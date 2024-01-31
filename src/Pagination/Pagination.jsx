import React, { useEffect, useState } from 'react'
import './Pagination.css'

const Pagination = () => {

  const [data, setData] = useState([]);
  const [page,setPage]=useState(10)
  //logic for pagination start
  const [currentPage, setCurrentPage] = useState(1)
  const recordPerPage = page;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
   //logic for pagination end
               
   async function info(){
    const resp = await fetch("https://dummyjson.com/users?limit=100")
     const result = await resp.json()
     setData(result.users)
}
  useEffect(() => {                                  
info()
  },[])

  const handlePage = (id) => {
  
    setCurrentPage(id + 1)

  }

  const handleNext = () => {
    if (currentPage == npage) {
      alert("This Is Last page")
    } else {
      setCurrentPage(currentPage + 1)
    }
    
  }

  const handlePrev = () => {
         if (currentPage == 1) {
           alert("This Is First page")
    } else {
      setCurrentPage(currentPage - 1)
    }
    
  }



  return (
    <div className='pagination_container'>
      <div className="header_section">
      <h3>Page:{currentPage + "/" + npage}</h3>
        <div className="select_page">
          <select onChange={(e) => setPage(e.target.value)}>
          <option value="10">Select Record</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value={npage*recordPerPage}>All</option>
        </select>
        </div>
      </div>
      
  <table className='table'>
              <thead >
                <tr className='table_head'>
                  <th>Sr No</th>
                  <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
                </tr>
              </thead>

      {records.map((d, i) => {
        return (
          <>
          <tbody >
              <tr key={i} id='table_row' >
                  <td>{d.id}</td>
                  <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                  <td>{d.gender}</td>
                </tr>
              </tbody>
          
          </>
        )
      })}
            
         </table>

      <div className='page_numbers_slide'><div className='page_number'>
      
        <button className="prev" onClick={handlePrev}>Prev-</button>

        {numbers.map((n, ind) => {
          return (
            <div key={ind}>
              <li id='numbers' className={currentPage == n?"active_numbers":"numbers"}  onClick={()=>handlePage(ind)}>{n}</li>
            </div>
         )
       })}
          <button className="next" onClick={handleNext}>+Next</button>
      </div>
      </div>

    </div>
  )
}

export default Pagination;