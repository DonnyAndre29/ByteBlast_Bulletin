// components/Header.js

import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

function Header() {
  return (
    <Menu inverted>
      <Menu.Item header style={{ fontSize: '1.5em' }}>ByteBlast Bulletin</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='home' style={{ fontSize: '1.2em' }} />
        <Menu.Item name='about' style={{ fontSize: '1.2em' }} />
        <Menu.Item name='contact' style={{ fontSize: '1.2em' }} />
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item name='signup-login' style={{ fontSize: '1.2em' }}>Sign Up / Login</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
