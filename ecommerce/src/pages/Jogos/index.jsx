import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Background from "../../components/Background";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Jogo(id) {
  const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos";
  // const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos" + {id};
  const [jogo, setJogo] = useState(null);

  const getJogo = async () => {
    try {
      const { data } = await axios.get(url);
      if (data.length > 0) {
        setJogo(data[0]);
      }
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
        <div className="jogo">
          <h1>Game Page</h1>
          {jogo && (
            <div className="game-card">
              <img src={jogo.imagem} alt={jogo.titulo} />
              <h2>{jogo.titulo}</h2>
              <p>Categoria: {jogo.categoria}</p>
              <p>Preço: {jogo.preco}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
