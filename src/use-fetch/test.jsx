import useFetch from ".";
import "./useFetch.css";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  return (
    <div className="tb_container">
      <h3 className="head_heading">Use useFetch Hook </h3>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}

      <table className="tbl">
        <thead>
          <tr className="h_row">
            <th className="h_row_content">Sr No.</th>
            <th className="h_row_content">Name</th>
            <th className="h_row_content">ZipCode</th>
            </tr>
        </thead>
        <tbody>
          
          {data && data.length
        ? data.map((productItem) => (
          <tr> 
            <td>{productItem.id}</td>
            <td>{productItem.name}</td>
            <td>{productItem.address.zipcode}</td>
          </tr>
           
          ))
        : null}
          
     
        </tbody>
        </table>
    </div>
  );
}
