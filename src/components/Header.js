// components/Header.js

import React from 'react';

function Header() {
  return (
    <header>
      <h1>ByteBlast Bulletin</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
