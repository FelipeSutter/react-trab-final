import Background from "../../components/Background";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const entrar = () => {
    if (login == "" || senha == "") {
      alert("Há campos vazios.");
    } else {
      const infos = {
        login: login,
        senha: senha,
      };
      localStorage.setItem("infos", JSON.stringify(infos));
      navigate(`/${login}`);
    }
  };

  return (
    <main>
      <Background />
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              value={login}
              required=""
              onChange={(e) => setLogin(e.target.value)}
            />
            <label>Nome </label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={senha}
              required=""
              onChange={(e) => setSenha(e.target.value)}
            />
            <label>Senha </label>
          </div>
          <button type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
