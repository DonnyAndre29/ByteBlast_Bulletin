import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SignUp_Login from '../src/components/assets/SignUp_Login/SignUp_Login';

function App() {
  return (
    <div className="App">
      <Header />
      {/* You can conditionally render the SignUpLogin component based on some state or condition */}
      {/* For example, you can render it only when a certain route is matched */}
      {/* <Route path="/signup-login" component={SignUpLogin} /> */}
      <SignUp_Login />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
