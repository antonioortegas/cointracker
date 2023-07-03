import '../assets/styles/Header.css'

function Header() {
    return (
      <header className="header" id='header'>
        <div id='logo'>
          <i className="fa-solid fa-coins fa-2xl" id='logoicon'></i>
        </div>

        <div id='home'>
          <i className="fa-solid fa-home fa-2xl" id='homeicon'></i>
        </div>

        <div id='user'>
          <i className="fa-solid fa-user fa-2xl" id='usericon'></i>
        </div>
        
      </header>
    )
  }
  
export default Header