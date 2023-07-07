import { useState } from 'react';
import '../assets/styles/Filters.css'

export function Filters({ changeFilters }) {
  const [type, setType] = useState('all');
  const [year, setYear] = useState('2002');
  const [country, setCountry] = useState('all');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      country: event.target.value,
    }));
  };

  const handleYearChange = (event) => {
    if (event.target.checked) {
      setYear(event.target.value);
      changeFilters((prevState) => ({
        ...prevState,
        year: event.target.value,
      }));
    } else if (!event.target.checked && event.target.type === 'checkbox') {
        setYear('all');
        changeFilters((prevState) => ({
          ...prevState,
          year: 'all',
        }));
      
      
    } else if (event.target.type === 'range') {
      setYear(event.target.value);
      changeFilters((prevState) => ({
        ...prevState,
        year: event.target.value,
      }));
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  return (
    <div id="filters">
      <div>
        <label htmlFor="country">País</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleCountryChange}
        />
      </div>
      <div>
        <label htmlFor="type">Tipo</label>
        <select name="type" id="type" onChange={handleTypeChange}>
          <option value="all">Ambas</option>
          <option value="n">Normal</option>
          <option value="c">Conmemorativa</option>
        </select>
      </div>
      <div className="container">
        <label htmlFor="year">Filtrar por año: </label>
        <input
          type="checkbox"
          id="yearBox"
          name="yearBox"
          onChange={handleYearChange}
        />
      </div>

      <div>
        <label htmlFor="year">Año</label>
        <input
          type="range"
          id="yearRange"
          name="yearRange"
          min="2002"
          max="2023"
          value={year} // Utiliza el valor del estado para el rango
          onChange={handleYearChange}
        />
        <span>{year}</span>
      </div>
    </div>
  );
}
