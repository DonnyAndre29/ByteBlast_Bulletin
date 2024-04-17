// components/Header.js

import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

// function Header() {
//   return (
//     <Menu inverted style={{ backgroundColor: '#FFD700', border: 'none', borderRadius: '0', marginBottom: '0' }}>
//       <Menu.Item header style={{ fontSize: '1.5em', color: '#000' }}>ByteBlast Bulletin</Menu.Item>
//       <Menu.Menu position='right'>
//         <Menu.Item name='home' style={{ fontSize: '1.2em', color: '#000' }} />
//         <Menu.Item name='about' style={{ fontSize: '1.2em', color: '#000' }} />
//         <Menu.Item name='contact' style={{ fontSize: '1.2em', color: '#000' }} />
//         <Menu.Item>
//           <Input icon='search' placeholder='Search...' />
//         </Menu.Item>
//         <Menu.Item name='signup-login' style={{ fontSize: '1.2em', color: '#000' }}>Sign Up / Login</Menu.Item>
//       </Menu.Menu>
//     </Menu>
//   );
// }

// export default Header;

function Header() {
  return (
    <Menu pointing secondary size="large" style={{ backgroundColor: '#f2711c' }}>
      <Menu.Item
        name='home'
        as={Link}
        to='/'
        style={{ color: '#ffffff' }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name='about'
        as={Link}
        to='/about'
        style={{ color: '#ffffff' }}
      >
        About
      </Menu.Item>
      <Menu.Item
        name='contact'
        as={Link}
        to='/contact'
        style={{ color: '#ffffff' }}
      >
        Contact
      </Menu.Item>
    </Menu>
  );
}

export default Header;

