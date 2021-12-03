import { useState, useEffect } from 'react';
import countryData from './../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    setCountries(countryData);
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((oneCountry) => (
          <Link
            key={oneCountry.alpha3Code}
            className="list-group-item list-group-item-action"
            to={'/' + oneCountry.alpha3Code}
          >
            <img
              src={`http://www.geognos.com/api/en/countries/flag/${oneCountry.alpha2Code}`}
              alt="flag"
            />
            <p>{oneCountry.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CountriesList;
