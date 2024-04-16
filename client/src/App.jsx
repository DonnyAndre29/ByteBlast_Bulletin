import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
// import User from './components/UserList/index'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      
      {/* <User /> */}
    </div>
  );
}

export default App;
