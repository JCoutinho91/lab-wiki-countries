import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countriesData }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const theCountry = countriesData.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });
    setFoundCountry(theCountry);
  }, [countryId]);

  if (!foundCountry) return null;

  return (
    <div class="col-7">
      <img
        src={`http://www.geognos.com/api/en/countries/flag/${foundCountry.alpha2Code}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  {foundCountry.border.map((alpha3) => {
                    return <a href={'/' + alpha3}>{alpha3}</a>;
                  })}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
