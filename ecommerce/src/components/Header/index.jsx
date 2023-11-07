import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();

  const armazenamento = localStorage.getItem("infos");

  let login;

  if (armazenamento != null) {
    login = JSON.parse(localStorage.getItem("infos")).login;
  } else {
    useEffect(() => {
      navigate(`/cadastro`);
    }, []);
  }

  const cat = (categoria) => {
    navigate("/categoria/" + categoria);
  };

  return (
    <Navbar expand="lg" className="header-color" sticky="top">
      <Container>
        <Link to="/home">
          <Navbar.Brand href="/home">Game Hub</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Link to="/home">
              <Nav.Link href="/home">Home</Nav.Link>
            </Link>
            <Link to="/contato">
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <Link to="/categorias/ação">
                <NavDropdown.Item onClick={() => cat("ação")}>
                  Ação
                </NavDropdown.Item>
              </Link>
              <Link to="/categorias/puzzle">
                <NavDropdown.Item onClick={() => cat("puzzle")}>
                  Puzzle
                </NavDropdown.Item>
              </Link>
              <Link to="/categorias/fps">
                <NavDropdown.Item onClick={() => cat("fps")}>
                  FPS
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/about">
              <Nav.Link href="/about">Sobre Nós</Nav.Link>
            </Link>
            <Nav.Item href="/login" className="login-name">
              Seja bem-vindo(a), {login}!
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
