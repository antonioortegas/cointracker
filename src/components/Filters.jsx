import React, { useState } from 'react';
import '../assets/styles/Filters.css'

export function Filters({ changeFilters }) {
  const [type, setType] = useState('all');
  const [year, setYear] = useState('all');
  const [country, setCountry] = useState('all');

  const handleYearChange = (event) => {
    //on app load, checkboc is not checked and year is set to all, slider is disabled, with a default value of 2002
    //if checkbox is checked, slider is enabled and year is set to the current value of the slider
    //if slider is moved, year is set to the current value of the slider and the checkbox is checked automatically
    //if checkbox is unchecked, slider is disabled and year is set to all
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        setYear(2001);
        changeFilters((prevState) => ({
          ...prevState,
          year: 2001,
        }));
      } else {
        setYear('all');
        changeFilters((prevState) => ({
          ...prevState,
          year: 'all',
        }));
      }
    }
    if (event.target.type === 'range') {
      //if checkbox is not checked, check it automatically
      if (!document.getElementById('yearBox').checked) {
        document.getElementById('yearBox').checked = true;
      }
      setYear(event.target.value);
      changeFilters((prevState) => ({
        ...prevState,
        year: event.target.value,
      }));
    }

  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      country: event.target.value,
    }));
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
          <option value="normal">Normal</option>
          <option value="conmemorativas">Conmemorativa</option>
        </select>
      </div>
      <div className="container">
      <div>
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
          min="2001"
          max="2023"
          value={year} // Utiliza el valor del estado para el rango
          onChange={handleYearChange}
        />
        <span>{year}</span>
      </div>
        
      </div>

      
  
      
    </div>
  );
}
