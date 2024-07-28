import React, { useState } from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className={`menu-bar ${active ? 'active' : ''}`}>
      <ul>
        <li>
          <a href="#" className="logo">Logo</a>
        </li>
        <li>
          <a href="#" className="menu-item" onClick={handleToggle}>
            Menu
          </a>
        </li>
        <li>
          <a href="#" className="menu-item" onClick={handleDropdown}>
            Services
          </a>
          <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
            <li>
              <a href="#">Service 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="menu-item">About</a>
        </li>
        <li>
          <a href="#" className="menu-item">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;