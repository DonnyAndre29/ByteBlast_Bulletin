import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
// import SignUp_Login from '../src/components/assets/SignUp_Login/SignUp_Login';



function App() {
  return (
    <div className="App">
      <Header />
      {/* You can conditionally render the SignUpLogin component based on some state or condition */}
      {/* For example, you can render it only when a certain route is matched */}
      {/* <Route path="/signup-login" component={SignUpLogin} /> */}
      {/* <SignUp_Login /> */}
      <MainContent />
      <Footer />
      
      {/* <User /> */}
    </div>
  );
}

export default App;
