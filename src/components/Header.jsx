import '../assets/styles/Header.css'
import { Filters } from './Filters'
import { Link } from 'react-router-dom'

function Header({ changeFilters }) {
    //Function that scrolls to the top of the page
    const handleScroll = () => {
      window.scrollTo(top
      )
    }

    return (
      <>
      {
      /*
          <div id='home'>
            <i className="fa-solid fa-filter fa-2xl" id='homeicon'></i>
          </div>

          <div id='user'>
            <i className="fa-solid fa-user fa-2xl" id='usericon'></i>
          </div>
      */
      }
        <header className="header" id='header'>
          <a href={"/cointracker"} onClick={handleScroll}>
            <div id='logo'>
              <i className="fa-solid fa-home fa-2xl" id='logoicon'></i>
            </div>
          </a>
        </header>
        <div id='headerSpacer'>

        </div>
      </>
    )
  }
  
export default Header