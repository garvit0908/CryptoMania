import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-white font-bold text-xl">Logo</div>

        {/* Navigation links on the right */}
        <ul className="flex space-x-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/cryptocurrencies">Cryptocurrencies</NavItem>
          <NavItem to="/cryptonews">Crypto News</NavItem>
          <NavItem to="/exchanges">Exchanges</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
