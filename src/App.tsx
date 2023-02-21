import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import NavbarTop from './components/navbar/Navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>

      <ToastContainer />
      <Router>

        <NavbarTop />

      
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />


          </Routes>

    <Footer />

      </Router>

    </>
  );
}

export default App;