import '../assets/styles/Header.css'
import { Filters } from './Filters'

function Header({ changeFilters }) {
    return (
      <>
        <header className="header" id='header'>
          <div id='logo'>
            <i className="fa-solid fa-home fa-2xl" id='logoicon'></i>
          </div>

          <div id='home'>
            <i className="fa-solid fa-filter fa-2xl" id='homeicon'></i>
          </div>

          <div id='user'>
            <i className="fa-solid fa-user fa-2xl" id='usericon'></i>
          </div>
          
        </header>
        <Filters changeFilters={changeFilters} />
      </>
    )
  }
  
export default Header