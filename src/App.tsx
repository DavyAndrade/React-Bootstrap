import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import NavbarTop from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin='anonymous' />

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin='anonymous'></script>

      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin='anonymous'></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin='anonymous'></script>

      <script>var Alert = ReactBootstrap.Alert;</script>


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