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
        <Link to="/signup">
          <Button primary style={buttonStyle}>Sign Up</Button>
        </Link>
      </Container>
      <Divider />
      <Container textAlign='center' style={{ margin: '2em 0' }}>
        {/* About Section */}
        
        <Divider horizontal>ABOUT</Divider>
        
        <Header as='h3' style={{ fontFamily: 'Georgia, serif', fontSize: '2em', color: '#333' }}>About ByteBlast Bulletin</Header>
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
        <Header as='h3' style={{ fontFamily: 'Georgia, serif', fontSize: '2em', color: '#333' }}>Contact Us</Header>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Have questions or feedback? Reach out to us at support@byteblast.com.
        </p>
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

export default Home;

// import { useQuery } from '@apollo/client';

// import PostList from '../components/PostList';
// import PostForm from '../components/PostForm';


// import { QUERY_POSTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_POSTS);
//   const posts = data?.posts || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-10 my-3"
//          style={{ border: '1px dotted #1a1a1a' }}>
//          <PostForm />
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <PostList
//               posts={posts}
//               title="A list of Posts..."
//             />
//           )}
        
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

