import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categorias from "./pages/Categoria";
import About from "./pages/AboutUs";
import Jogo from "./pages/Jogos";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:usuario" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categoria/:categoria" element={<Categorias />} />
        <Route path="/contato" />
        <Route path="/about" element={<About />} />
        <Route path="/carrinho" />
        <Route path="/jogo/:id" element={<Jogo />} />
      </Routes>
    </>
  );
}

export default App;
