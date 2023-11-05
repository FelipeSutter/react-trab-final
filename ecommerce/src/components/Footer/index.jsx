import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="row">
      <div className="column side">
        <img src={logo} alt="logo" className="logo-img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ullam.
        </p>
      </div>
      <div className="column middle">
        <h2>
          <strong>Navegue pela página</strong>
        </h2>
        <Link to={"/"}>Home</Link>
        <Link to={"/contato"}>Contato</Link>
        <Link to={"/sobrenos"}>Sobre nós</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <div className="column side">
        <h2>
          <strong>Nossos fundadores</strong>
        </h2>
        <a
          href="https://github.com/FelipeSutter/react-trab-final"
          target="_blank"
        >
          <button className="github-btn btn"></button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
