import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductHome from './product/ProductHome';
import CartHome from './cart/CartHome';
import AddProduct from './product/AddProduct';
import EditProduct from './product/EditProduct'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Routes>
        <Route exact path='/product' element={<ProductHome/>}></Route>
        {/* <Route exact path='/cart' element={<CartHome/>}></Route> */}
        <Route exact path='/addproduct' element={<AddProduct/>}></Route>
        <Route exact path='/editpage/:productId' element={<EditProduct/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
