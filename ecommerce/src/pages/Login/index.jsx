import Background from "../../components/Background";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Input from "../../components/Input_Login";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const loginDefinido = JSON.parse(localStorage.getItem("infos")).login;
  const senhaDefinida = JSON.parse(localStorage.getItem("infos")).senha;

  console.log(loginDefinido);
  console.log(senhaDefinida);

  const entrar = () => {
    if (login == "" || senha == "") {
      alert("Há campos vazios.");
    } else if (login != loginDefinido || senha != senhaDefinida) {
      alert("Nome ou senha inválidos.");
    } else {
      navigate(`/home/${login}`);
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
          <Link to={"/cadastro"}>
            <span>Não tem uma conta? Cadastre-se!</span>
          </Link>
          <button type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
