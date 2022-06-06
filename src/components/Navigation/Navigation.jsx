import React from 'react';
import './Navigation.scss';

import { NavLink } from 'react-router-dom';

export const Navigation = () => {

  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <li>
          <NavLink
            className="Navbar__link"
            activeClassName="Navbar__link--active"
            to="/characters"
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navbar__link"
            activeClassName="Navbar__link--active"
            to="/episodes"
          >
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navbar__link"
            activeClassName="Navbar__link--active"
            to="/locations"
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navbar__link"
            activeClassName="Navbar__link--active"
            to="/my_list"
          >
            My watch list
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
