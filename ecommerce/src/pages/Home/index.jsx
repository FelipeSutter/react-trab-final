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
  const [jogos, setJogos] = useState([{}, {}, {}]);
  const [jogosDes, setJogosDes] = useState([]);

  const getJogos = async () => {
    try {
      const { data } = await axios.get(url);
      const jogosDestaque = data
        .sort((a, b) => b.avaliacao - a.avaliacao)
        .slice(0, 3);
      setJogosDes(jogosDestaque);
      setJogos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJogos();
  }, []);

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
              <Link to={`/jogo/${jogos[0].id}`} className="conteudo-maior">
                {jogos[0] && (
                  <img className="img-destaque" src={jogos[0].imagem} alt="" />
                )}
              </Link>
              <Link to={`/jogo/${jogos[1].id}`} className="conteudo-menor">
                {jogos[1] && (
                  <img className="img-destaque" src={jogos[1].imagem} alt="" />
                )}
              </Link>
              <Link to={`/jogo/${jogos[2].id}`} className="conteudo-menor">
                {jogos[2] && (
                  <img className="img-destaque" src={jogos[2].imagem} alt="" />
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
