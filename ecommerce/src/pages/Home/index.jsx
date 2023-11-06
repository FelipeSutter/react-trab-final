import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Categoria from "../../components/Categoria";
import { Link } from "react-router-dom";
import Background from "../../components/Background";
import logo from "../../assets/logo.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos";
  const [jogos, setJogos] = useState([]);
  const jogosDestaque = jogos
    .sort((a, b) => b.avaliacao - a.avaliacao)
    .slice(0, 3);

  const getJogos = async () => {
    try {
      const { data } = await axios.get(url);
      setJogos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJogos();
  }, []);

  console.log(jogosDestaque);

  return (
    <>
      <Header />
      <main>
        <Background />
        <div>
          <section id="inicio">
            <img src={logo} alt="" />
          </section>
          <section id="destaques">
            <h2>Destaques</h2>
            <div className="grid-container">
              <Link className="conteudo-maior">
                {jogosDestaque[0] && (
                  <img
                    className="img-destaque"
                    src={jogosDestaque[0].imagem}
                    alt=""
                  />
                )}
              </Link>
              <Link className="conteudo-menor">
                {jogosDestaque[1] && (
                  <img
                    className="img-destaque"
                    src={jogosDestaque[1].imagem}
                    alt=""
                  />
                )}
              </Link>
              <Link className="conteudo-menor">
                {jogosDestaque[2] && (
                  <img
                    className="img-destaque"
                    src={jogosDestaque[2].imagem}
                    alt=""
                  />
                )}
              </Link>
            </div>
          </section>

          <section id="categorias">
            <Categoria categoria={"acao"} jogos={jogos} />
            <Categoria categoria={"puzzle"} jogos={jogos} />
            <Categoria categoria={"fps"} jogos={jogos} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
