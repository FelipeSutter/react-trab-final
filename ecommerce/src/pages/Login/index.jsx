import Background from "../../components/Background";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Input from "../../components/Input_Login";

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
            <Input
              type="text"
              value={login}
              setValue={setLogin}
              label={"Nome"}
            />
          </div>
          <div className="user-box">
            <Input
              type="password"
              value={senha}
              setValue={setSenha}
              label={"Senha"}
            />
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
