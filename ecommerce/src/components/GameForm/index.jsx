import React, { useState, useEffect } from "react";
import "./style.css";

const GameForm = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    } else {
      setFormData({});
    }
  }, [initialValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Close the form after submission
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={formData.titulo || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              name="categoria"
              value={formData.categoria || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            URL da Imagem:
            <input
              type="text"
              name="imagem"
              value={formData.imagem || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={formData.descricao || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name="preco"
              value={formData.preco || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Avaliação:
            <input
              type="text"
              name="avaliacao"
              value={formData.avaliacao || ""}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default GameForm;
