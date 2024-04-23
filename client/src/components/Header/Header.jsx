import React from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
// import { useLocation, useNavigate } from 'react-router-dom';

 function Header() {

  return (
   
    <Menu pointing secondary size="large" style={{ backgroundColor: '#FFD700', margin: 0, borderRadius: 0, fontFamily: 'Georgia, serif' }}>
     
      <Menu.Item
        header
        content="ByteBlast Bulletin"
        style={{ color: '#000000' }}
      />
      <Menu.Menu position='right'>

        <Menu.Item
          name='home'
          as={Link}
          to='/'
          style={{ color: '#000000', margin: 0,  padding: 12 }}
        >
          Home
        </Menu.Item>
      
        <HashLink
          name='about'
          as={Link}
          smooth to='/#about'
          style={{ color: '#000000', margin: 0,  padding: 12}}
        >          
          About
        </HashLink>

        <HashLink
          name='contact'
          as={Link}
          smooth to='/#contact'
          style={{ color: '#000000', margin: 0,  padding: 12}}
        >
          Contact
        </HashLink> 
       
      </Menu.Menu>
    </Menu>   
  
  )
}

export default Header;











// import { HashLink } from 'react-router-hash-link'
// function Header() {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
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