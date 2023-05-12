import { useState, useEffect } from 'react';
import axios from 'axios';


function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //const [pageNo,setPageNo] = useState(10)
  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://restcountries.com/v3.1/all");
          setCountries(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    const [name,setName] = useState('')

    const fetchbybtn = async () => {
      try {
        const response = await axios.get(` https://restcountries.com/v3.1/name/${name}`);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col"> 
          <input
            type="text"
            className="form-control mb-3 "
            placeholder="Search by name"
            onChange={e => setSearchTerm(e.target.value)}
          /> 
          
          <input
            type="text"
            className="form-control mb-3 "
            placeholder="Search by Api Hit"
            onChange={e => setName(e.target.value)}
          /> 
          
         <div className='d-flex flex-row mb-1 justify-content-evenly'>
         {/* can add justify-content-between or justify-content-around */}
          <button className='btn btn-outline-primary btn-sm mb-2 ' onClick={fetchbybtn } >Search</button>
          
          <button className='btn btn-outline-warning btn-sm mb-2 ' onClick={fetchData } >Refresh</button>
          </div>
          <table className="table table-bordered table-hover">
            <thead className="table-warning">
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Capital</th>
                <th>Currency</th>
                <th>Symbol</th>
                <th>Calling Code</th>
                <th>Postal Code</th>
              </tr>
            </thead>
            <tbody className='table-dark'>
          { countries
              .filter(country =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
              ) 
                
              .map(country => (
                <tr key={country.cca3}>
                  <td>{country.name.common}</td>
                  <td>{country.cca3}</td>
                  <td>{country.capital}</td>
                  <td>{country.currencies && Object.values(country.currencies)[0].name}</td>
                  <td>{country.currencies && Object.values(country.currencies)[0].symbol}</td>
                  <td>
                    {country.callingCodes && country.callingCodes.length > 0
                      ? `+${country.callingCodes}`
                      : '-'}
                  </td>
                  <td>{country.postalCode && Object.values(country.postalCode)[0].regex}</td>
{                /*  <td>{country.postalCode}</td>
                    */}
                   
                </tr>
              ))}
            
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CountryList;
