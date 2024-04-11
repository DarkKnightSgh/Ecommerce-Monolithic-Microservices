import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import Landing from './pages/landing'
import Signup from './pages/signup'
import About from './pages/about'
import Info from './pages/info'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='home' element={<Home/>}/>
      {/* Define ProductDetail route with dynamic parameter */}
      <Route path="/ProductDetail" element={<ProductDetail />} />

      <Route path='signup' element={<Signup/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='home/info' element={<Info/>}/>
      <Route path='home/cart' element={<Cart/>}/>
    </Routes>
    
    
  );
}

export default App;
