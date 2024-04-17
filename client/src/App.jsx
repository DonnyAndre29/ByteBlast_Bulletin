import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      {/* You can conditionally render the SignUpLogin component based on some state or condition */}
      {/* For example, you can render it only when a certain route is matched */}
      {/* <Route path="/signup-login" component={SignUpLogin} /> */}
      {/* <SignUpLogin /> */}
      <Footer />
    </div>
  );
}

export default App;
