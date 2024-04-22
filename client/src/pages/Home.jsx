import React from 'react';
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main style={{ backgroundColor: '#FFD700', minHeight: 'calc(100vh - 80px)', overflowY: 'auto', padding: '2em 0' }}>
      <Container textAlign='center' style={{ marginBottom: '2em', paddingTop: '4em' }}>
        <Header as='h2' style={{ fontFamily: 'Georgia, serif', fontSize: '3.5em', fontWeight: 'bold', color: '#333' }}>
          Welcome to ByteBlast Bulletin
        </Header>
        <p style={{ fontSize: '1.2em', marginBottom: '2em', color: '#555' }}>
          ByteBlast Bulletin is a blog website dedicated to software developers. Here, developers can share their ideas, insights, tutorials, and projects with the community. Whether you're a seasoned developer or just starting out, ByteBlast Bulletin provides a platform for learning, collaboration, and inspiration.
        </p>
        {/* Link to signup/login page */}
        <Link to="/signup_login">
          <Button primary style={buttonStyle}>Sign Up</Button>
        </Link>
      </Container>
      <Divider />
      <Container textAlign='center' style={{ margin: '2em 0' }}>
        {/* About Section */}
        
        <Divider horizontal>ABOUT</Divider>
        
        <Header as='h3' id='About' style={{ fontFamily: 'Georgia, serif', fontSize: '2em', color: '#333' }}>About ByteBlast Bulletin</Header>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          ByteBlast Bulletin is a platform where software developers can connect, share knowledge, and collaborate on projects. Our mission is to provide a space for developers to learn, grow, and inspire each other.
        </p>
        <Header as='h3' style={{ marginTop: '2em', fontFamily: 'Georgia, serif', fontSize: '1.5em', color: '#333' }}>Why Choose ByteBlast Bulletin?</Header>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          ByteBlast Bulletin offers a unique opportunity for developers to showcase their expertise, learn from others, and build a strong network within the developer community. With a wide range of topics and resources available, ByteBlast Bulletin is your go-to destination for all things software development.
        </p>
      </Container>
      <Divider />
      <Container textAlign='center' style={{ margin: '2em 0' }}>
        {/* Contact Section */}
        <Divider horizontal>CONTACT</Divider>
        <Header as='h3' id= 'section2' style={{ fontFamily: 'Georgia, serif', fontSize: '2em', color: '#333' }}>Contact Us</Header>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Have questions or feedback? Reach out to us at support@byteblast.com.
        </p>
      </Container>
      {/* GitHub Links Section */}
      <Container textAlign='center' style={{ margin: '2em 0' }}>
        <Divider horizontal>GITHUB LINKS</Divider>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://github.com/DonnyAndre29" target="_blank" rel="noopener noreferrer" style={githubLinkStyle}>DonAndre Clark II</a>
          <a href="https://github.com/JoshuaBryantza" target="_blank" rel="noopener noreferrer" style={githubLinkStyle}>Joshua Bryant</a>
          <a href="https://github.com/jhill1230" target="_blank" rel="noopener noreferrer" style={githubLinkStyle}>Justin Hill</a>
        </div>
      </Container>
    </main>
  );
}

const buttonStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '1.2em',
  padding: '1em 2em',
  borderRadius: '2em',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500)',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const githubLinkStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '1.2em',
  padding: '0.5em 1em',
  borderRadius: '0.5em',
  margin: '0 1em',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundImage: 'linear-gradient(to right, #24292E, #24292E)',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

export default Home;


