import Background from "../../components/Background";
import ContactForm from "../../components/ContactForm";
import ImgAbout from "../../components/ContactForm";
import "./style.css";
import { useState, useEffect } from "react";

function Contatos() {
  return (
    <main>
      <Background />
      <div className="contatos-container">
        <div className="form">
          <h2>Contato: </h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default Contatos;
