import{ useState } from 'react';
import '../assets/styles/Filters.css'

export function Filters({ changeFilters }) {

    let yearRangeElement = document.getElementById('yearRange')
    if(yearRangeElement != null){
        var yearRange = yearRangeElement.value
    }
    let yearBoxElement = document.getElementById('yearBox')
    const [type, setType] = useState('all')
    const [year, setYear] = useState('all')
    const [country, setCountry] = useState('all')

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
        changeFilters(prevState => ({
            ... prevState,
            country: event.target.value
        }))
    }

    const handleYearChange = (event) => {
        //if the event comes from a checked checkbox, set the year to the year in the range input
        //If it comes from an unchecked checkbox, set the year to all
        //Also, if it comes from the range input, set the year to the value of the range input
        if(event.target.checked){
            if(yearRangeElement != null){
                setYear(yearRange)
            }
            else{
                setYear('2002')
            }
            changeFilters(prevState => ({
                ... prevState,
                year: yearRange
            }))
        }
        else if(!event.target.checked && event.target.type == 'checkbox'){
            setYear('all')
            changeFilters(prevState => ({
                ... prevState,
                year: 'all'
            }))
        }
        else if(event.target.type == 'range'){
            yearBoxElement.checked = true
            setYear(event.target.value)
            yearRange = event.target.value
            changeFilters(prevState => ({
                ... prevState,
                year: yearRange
            }))
            
        }

    }

    const handleTypeChange = (event) => {
        setType(event.target.value)
        changeFilters(prevState => ({
            ... prevState,
            type: event.target.value
        }))
    }

    return(
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
            <div className='container'>
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
                    onChange={handleYearChange}
                />
                <span>{yearRange}</span>
            </div>

            
        </div>
    )
}