import React from 'react'

//lets think of the logic of navbar
//Home CryptoCurrencies CryptoNews Exhanges

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 m-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex space-x-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/cryptocurrencies">Cryptocurrencies</NavItem>
          <NavItem href="/cryptonews">Crypto News</NavItem>
          <NavItem href="/exchanges">Exchanges</NavItem>
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
};

export default Navbar
