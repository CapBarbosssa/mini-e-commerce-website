import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRouter from "./components/PrivateRouter"
import Cart from "./pages/Cart"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <PrivateRouter>
            <Homepage />
          // </PrivateRouter>
        } />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
