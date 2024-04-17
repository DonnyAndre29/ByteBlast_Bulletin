// components/MainContent.js

import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

function MainContent() {
  return (
    <main>
      <Container text style={{ marginTop: '3em' }}>
        <Header as='h2'>Welcome to ByteBlast Bulletin</Header>
        <Segment>
          <p>
            Explore our collection of articles, tutorials, and insights to enhance your software development skills.
          </p>
          {/* You can add more content here as needed */}
        </Segment>
      </Container>
    </main>
  );
}

export default MainContent;
