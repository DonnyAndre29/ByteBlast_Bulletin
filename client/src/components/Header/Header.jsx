import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
   
    <Menu pointing secondary size="large" style={{ backgroundColor: '#FFD700', margin: 0, borderRadius: 0, fontFamily: 'Georgia, serif' }}>
     
      <Menu.Item
        header
        content="ByteBlast Bulletin"
        style={{ color: '#000000' }}
      />
      <Menu.Menu position='right'>

      {/* <Menu.Item
          name='logout'
          as={Link}
          to='/logout'
          style={{ color: '#000000' }}
        >
           <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
         
        </Menu.Item> */}
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          style={{ color: '#000000' }}
        >
          Home
        </Menu.Item>
      
        <Menu.Item
          name='about'
          as={Link}
          to='/about'
          style={{ color: '#000000' }}
        >
          About
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link}
          to='/contact'
          style={{ color: '#000000' }}
        >
          Contact
        </Menu.Item> 
       
      </Menu.Menu>
    </Menu>   
  
  )
}

export default Header;












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