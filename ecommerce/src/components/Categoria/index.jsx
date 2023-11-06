import Card from "../card";
import "./style.css";

function Categoria({ jogos, categoria }) {
  const jogosCategoria = jogos.filter((jogo) => jogo.categoria == categoria);
  return (
    <article className={categoria}>
      <h2>{categoria}</h2>
      <div className="cards-container">
        {jogosCategoria.map((item) => (
          <Card key={item.id} jogo={item} />
        ))}
      </div>
    </article>
  );
}

export default Categoria;
