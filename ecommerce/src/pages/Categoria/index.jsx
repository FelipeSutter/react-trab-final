import React from "react";
import Categoria from "../../components/Categoria";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Background from "../../components/Background";
import "./style.css";

export default function Categorias() {
  const [jogos, setJogos] = useState([]);
  const url = "https://6542c2c301b5e279de1f8b80.mockapi.io/jogos";
  const { categoria } = useParams();
  const jogosDestaque = jogos;

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

  return (
    <main>
      <Background />
      <div className="categ">
        <section id="destaques">
          <div className="titulo">
            <h1>{categoria}</h1>
          </div>
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
          <Categoria categoria={categoria} jogos={jogos} />
        </section>
      </div>
    </main>
  );
}
