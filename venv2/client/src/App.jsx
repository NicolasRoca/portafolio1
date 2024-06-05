import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductosPage from "./pages/ProductosPage";
import PrepagoPage from "./pages/PrepagoPage";
import ExitoPage from "./pages/ExitoPage";
import AgregarProductoPage from "./pages/AgregarProductoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/prepago" element={<PrepagoPage />} />
      <Route path="/exito" element={<ExitoPage />} />
      <Route path="/agregar-producto" element={<AgregarProductoPage />}></Route>
    </Routes>
  );
}

export default App;
