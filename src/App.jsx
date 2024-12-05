import React from 'react'
import Home from './pages/Home';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import './styles/App.css'
import ProductDetails from './pages/ProductDetails';
import AppRouter from './Router';
function App() {

  return (
    <div className="App">
      <AppRouter /> {/* Render the router */}
    </div>
  );
}

export default App
