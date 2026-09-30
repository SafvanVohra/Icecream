import React from 'react';
import AddToHomeScreen from 'react-add-to-homescreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import MenuCard from "./components/MenuCard";
import About from "./components/About";
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer";
import Products from "./components/Products";
import data from "./data";
import './App.css';

function App() {
  const Home = () => (
    <>
      <Hero />
      <div className="divider"></div>
      <Offers />
      <h2 id="product" className="menu-header">Popular Choices of the week</h2>
      <MenuCard items={data} />
      <About />
      <Testimonials />
      <div className="divider-2"></div>
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <AddToHomeScreen />
    </Router>
  );
}

export default App;
