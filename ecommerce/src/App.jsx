import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/index.jsx";
import Header from "./components/Header/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:usuario" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" />
        <Route path="/contato" />
        <Route path="/carrinho" />
        <Route path="/:jogo" />
      </Routes>
    </>
  );
}

export default App;
