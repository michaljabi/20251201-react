import { useState } from "react";

 export function MainMenu() {

    // tak nie da rady - to musi być STAN!!!! bo zmienia się w czasie (po kliknięciu!)
  // let isMenuOpen = true; 

  // to jest STAN - zmiana w czasie dzięki setIsMenuOpen, konwencja, że zaczyna się od set.... nazwa.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button className="navbar-toggler" type="button" onClick={() => { 
        // isMenuOpen = !isMenuOpen 
       
        // console.log(isMenuOpen)
        // Aktualizacje stanu mogę uruchomić na 2 sposoby:
        setIsMenuOpen(!isMenuOpen)
        //setIsMenuOpen((iMO) => !iMO)
        }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse" + ( isMenuOpen ? " show" : "" )}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="auctions">
              Aukcje
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="promotions">
              Promocje
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="advices">
              Podpowiadamy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
