import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Navbar from './components/navbar/Navbar';
import Home from './components/homePage/home/Home';
import HomeCollections from './components/homePage/homeCollections/HomeCollections';
import PolicyAndSubscribe from './components/homePage/policyAndSubscribe/PolicyAndSubscribe';
import Footer from './components/homePage/footer/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css'; 

const AppContent = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      
      {!isAuthPage && (
        <>
          <Home />
          <HomeCollections />
          <PolicyAndSubscribe />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <AppContent />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
