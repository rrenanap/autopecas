import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Products from './pages/Products';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  const [user, setUser] = useState(); 
  const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const storedUser = localStorage.getItem("usuario");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); 
      }
      user;
    }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <div>
      <Header cartCount={cart.length} user={user} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={user ? <Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
