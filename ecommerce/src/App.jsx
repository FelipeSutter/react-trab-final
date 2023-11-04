import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/categorias" />
        <Route path="/contato" />
        <Route path="/carrinho" />
        <Route path="/:jogo" />
      </Routes>
    </>
  );
}

export default App;
