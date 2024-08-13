import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useState } from 'react';
import Order from './pages/Order';
import FilterData from './pages/FilterData';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout setOrder={setOrder}/>} />
      <Route path='/orderConfirmation' element={<Order order={order}/>} />
      <Route path='/filterData' element={<FilterData/>} />
      <Route path='/detail/:id' element={<ProductDetail/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
