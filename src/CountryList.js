import { useState, useEffect } from 'react';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(countries.callingCodes);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all') //is sy data sara fetch ho raha hai 
      .then(response => response.json()) // json mai response convert ho raha hai
      .then(data => setCountries(data)) 
      .catch(error => console.log(error))// execption handling 
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col"> 
          <input
            type="text"
            className="form-control mb-3 table-dark"
            placeholder="Search by name"
            onChange={e => setSearchTerm(e.target.value)}
          /> 
          <table className="table table-bordered table-hover">
            <thead className="table-warning">
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Capital</th>
                <th>Currency</th>
                <th>Calling Code</th>
              </tr>
            </thead>
            <tbody className='table-dark'>
            {countries
              .filter(country =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
              ) 
              
              .map(country => (
                <tr key={country.cca3}>
                  <td>{country.name.common}</td>
                  <td>{country.cca3}</td>
                  <td>{country.capital}</td>
                  <td>{country.currencies && Object.values(country.currencies)[0].name}</td>
                  <td>
                    {country.callingCodes && country.callingCodes.length > 0
                      ? `+${country.callingCodes}`
                      : '-'}
                  </td>
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
