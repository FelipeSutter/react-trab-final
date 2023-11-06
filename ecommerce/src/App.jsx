import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Categorias from "./pages/Categoria/index.jsx";
import About from "./pages/AboutUs/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:usuario" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categoria/:categoria" element={<Categorias />} />
        <Route path="/contato" />
        <Route path="/about" element={<About />} />
        <Route path="/carrinho" />
        <Route path="/:jogo" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
