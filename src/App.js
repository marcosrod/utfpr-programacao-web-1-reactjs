import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import ProductCatalog from './pages/ProductCatalog';
import CategoryCatalog from './pages/CategoryCatalog';
import ProductCreate from './pages/ProductCreate';
import CategoryCreate from './pages/CategoryCreate';
import ProductEdit from './pages/ProductEdit';
import CategoryEdit from './pages/CategoryEdit';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/product" element={<ProductCatalog />} />
        <Route path="/category" element={<CategoryCatalog />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/category/create" element={<CategoryCreate />} />
        <Route path="/product/edit" element={<ProductEdit />} />
        <Route path="/category/edit" element={<CategoryEdit />} />
    </Routes>
  );
}

export default App;
