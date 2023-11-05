import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const cat = (categoria) => {
    navigate("/categoria/" + categoria);
  };

  return (
    <Navbar expand="lg" className="header-color" sticky="top">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="/">Game Hub</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Link to={"/"}>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to={"/contato"}>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Link>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <Link to={`/categorias`}>
                <NavDropdown.Item onClick={() => cat("acao")}>
                  Ação
                </NavDropdown.Item>
              </Link>
              <Link to={`/categorias`}>
                <NavDropdown.Item onClick={() => cat("puzzle")}>
                  Puzzle
                </NavDropdown.Item>
              </Link>
              <Link to={`/categorias`}>
                <NavDropdown.Item onClick={() => cat("fps")}>
                  FPS
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to={"/sobrenos"}>
              <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
            </Link>
            <Link to={"/login"} className="login-link">
              <Nav.Link href="/login">Faça Login</Nav.Link>
              <IoPersonCircleOutline />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
