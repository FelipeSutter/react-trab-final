import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Background from "../../components/Background";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

export default function Jogo() {
  const { id } = useParams();
  // const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos";
  const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos/";
  const [jogo, setJogo] = useState(null);

  const getJogo = async () => {
    try {
      const { data } = await axios.get(url);
      const jogoAtual = data.find((item) => item.id == id);
      console.log(jogoAtual);
      setJogo(jogoAtual);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJogo();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Background />
        {jogo && (
          <div className="game-container">
            <h2>{jogo.titulo}</h2>

            <img src={jogo.imagem} alt={jogo.titulo} />

            <div>
              <p>
                <strong>Categoria: </strong>
                {jogo.categoria}
              </p>
              <p>
                <strong>Descrição: </strong>
                {jogo.descricao}
              </p>
              <p>
                <strong>Nota: </strong>
                {jogo.avaliacao}
              </p>
              <p>
                <strong>Preço: </strong>
                R$ {jogo.preco}
              </p>
            </div>

            <button>Comprar</button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
