import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countryData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countryData={countryData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
