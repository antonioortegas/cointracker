import '../assets/styles/Home.css'
import { Link } from 'react-router-dom'

function Home({setFilters}) {
    //Function that changes the filters to the ones corresponding to the country that was clicked
    const changeFilters = (e) => {
        let country = e.target.innerText
        console.log(country)
        setFilters((prevState) => ({
            ...prevState,
            country: country,
          }));
        localStorage.setItem('currentCountry', country)
    }
    //Array with all the countries that have euro coins
    const countries = [
        "Alemania",
        "Austria",
        "Belgica",
        "Chipre",
        "Croacia",
        "Eslovaquia",
        "Eslovenia",
        "España",
        "Estonia",
        "Finlandia",
        "Francia",
        "Grecia",
        "Irlanda",
        "Italia",
        "Letonia",
        "Luxemburgo",
        "Malta",
        "Paises_Bajos",
        "Portugal"
    ]

    return (
        //Render a div for each country with the name of the country and a link to the collection of that country
        //The link is a react-router-dom Link that redirects to the collection of that country
        //The divs are organized in a grid, where you have a card for each country, with the name of the country and the image of a folder
        //Clicking anywhere in the card redirects to the collection of that country
        <>
            <div className="home">
                <ul>
                   {countries.map((country, i) => {
                    return (
                        <li key={country} className="card">
                            <Link to={"/cointracker/collection"} id='link' onClick={changeFilters}>
                                <img src={`../src/assets/images/folder.png`} alt={country} className='folderImage'/>
                                <h2>{country}</h2>
                            </Link>
                        </li>
                    )
                    })} 
                </ul>
                
            </div>
        </>
    )
  }
  
export default Home