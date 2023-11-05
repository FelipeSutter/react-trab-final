import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="row">
      <div className="column side">
        <h2>Copyright Game Hub</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ullam.
        </p>
      </div>
      <div className="column middle">
        <h2>Navegue pela página</h2>
        <Link to={"/"}>Home</Link>
        <Link to={"/contato"}>Contato</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <div className="column side">
        <h2>Redes Sociais</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ullam.
        </p>
      </div>
    </div>
  );
}

export default Footer;
