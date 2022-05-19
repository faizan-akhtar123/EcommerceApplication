import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productID' element={<ProductDetails />} />
          <Route path='/*' element={<h1>Page 404 not found</h1>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
