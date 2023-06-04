import './App.css';
import { BrowserRouter, Routes, Route , Navigate  } from "react-router-dom";
import Navbarr from './Components/NavBar';
import Home from './pages/Home';
import Footers from './Components/Footers';
import LogRegi from './Components/LogRegi';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/Addproduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarr/>
      <Routes>

      <Route exact element={<PrivateComponent/>}>
      <Route  path="/" element={<Home />} />
      <Route  path="/shop" element={<ProductList/>} />
      <Route  path="/add" element={<AddProduct/>} />
      <Route  path="/updateProduct/:id" element={<UpdateProduct/>} />
      <Route  path="/contact" element={<h1>Contact</h1>} />
      <Route  path="/profile" element={<h1>Profile</h1>} />
      <Route  path="/logout" element={<h1>logout</h1>} />
      </Route>
      <Route  path="/register" element={<LogRegi/>} />
      <Route  path="/login" element={<Login/>} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footers/>
      </BrowserRouter>
    </>
  );
}

export default App;
