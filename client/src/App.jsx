import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';




// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {  
  return (
    <ApolloProvider client = {client}>
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      {/* You can conditionally render the SignUpLogin component based on some state or condition */}
      {/* For example, you can render it only when a certain route is matched */}
      {/* <Route path="/signup-login" component={SignUpLogin} /> */}
      {/* <SignUpLogin /> */}
      
      <Outlet />
      
      {/* <Footer /> */}
      
      {/* <User /> */}
    </div>
    
    </ApolloProvider>
    
  );
}

export default App;
