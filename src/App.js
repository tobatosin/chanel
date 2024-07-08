// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import ChecklistPage from './Pages/ChecklistPage';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checklist" element={<ChecklistPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
