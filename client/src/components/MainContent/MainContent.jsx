import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#FFD700', minHeight: '100vh' }}>
      <Container textAlign='center' style={{ paddingTop: '1em' }}>
        <Header as='h2' style={{ fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold' }}>
          Welcome to ByteBlast Bulletin
        </Header>
        <p style={{ fontSize: '1.2em' }}>
          ByteBlast Bulletin is a blog website dedicated to software developers. Here, developers can share their ideas, insights, tutorials, and projects with the community. Whether you're a seasoned developer or just starting out, ByteBlast Bulletin provides a platform for learning, collaboration, and inspiration.
        </p>
        {/* Link to signup/login page */}
        <Link to="/SignUp_Login">Sign Up/Login</Link>
      </Container>
    </main>
  );
}

export default MainContent;










