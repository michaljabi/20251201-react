import { useState } from "react";
import { NavLink } from "react-router";

export function MainMenu() {
  // tak nie da rady - to musi być STAN!!!! bo zmienia się w czasie (po kliknięciu!)
  // let isMenuOpen = true;

  // to jest STAN - zmiana w czasie dzięki setIsMenuOpen, konwencja, że zaczyna się od set.... nazwa.
  const [isMenuOpen, setIsMenuOpen] = useState(
    Boolean(localStorage.getItem("isMenuOpen"))
  );

  function handleMenuToggle() {
    // isMenuOpen = !isMenuOpen

    // console.log(isMenuOpen)
    // Aktualizacje stanu mogę uruchomić na 2 sposoby:
    setIsMenuOpen(!isMenuOpen);
    localStorage.setItem("isMenuOpen", !isMenuOpen ? true : "");
    //setIsMenuOpen((iMO) => !iMO)
  }

  // najczęściej tak:
  // const handleMenuToggle2 = () => {};

  const menuItems = [
    { name: "Aukcje", link: "/auctions" },
    // { name: "Aukcje", link: "/auctions" },
    { name: "Promocje", link: "/promotions" },
    { name: "Podpowiadamy", link: "/advices" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleMenuToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse" + (isMenuOpen ? " show" : "")}>
        <ul className="navbar-nav">
          {
            /* key musi być: 1. Unikatowy 2. Nie-randomowy !!! 3. Nie może być to `index`  */
            menuItems.map((mI) => (
              <li className="nav-item" key={mI.name}>
                <NavLink className="nav-link" to={mI.link}>
                  {mI.name}
                </NavLink>
              </li>
            ))
          }
          {/*
            [
              <li className="nav-item" key="1">
                <a className="nav-link" href="auctions">
                  Aukcje
                </a>
              </li>,
              <li className="nav-item" key="2">
                <a className="nav-link" href="promotions">
                  Promocje
                </a>
              </li>,
              <li className="nav-item" key="3">
                <a className="nav-link" href="advices">
                  Podpowiadamy
                </a>
              </li>
            ]*/}
        </ul>
      </div>
    </nav>
  );
}
