import React from "react";

interface ComidasProps {
  addToCart: (item: { id: number; nombre: string; precio: number; cantidad: number }) => void;
}

const Comidas: React.FC<ComidasProps> = ({ addToCart }) => {
  const comidas = [
    { id: 3, nombre: "Hamburguesa", precio: 5.0 },
    { id: 4, nombre: "Pizza", precio: 8.0 },
    { id: 5, nombre: "Empanadas", precio: 1.5 },
  ];

  return (
    <div>
      <h2>Comidas</h2>
      {comidas.map((comida) => (
        <div key={comida.id} style={{ marginBottom: "10px" }}>
          <span>{comida.nombre} - ${comida.precio.toFixed(2)}</span>
          <button
            onClick={() =>
              addToCart({ ...comida, cantidad: 1 })
            }
            style={{ marginLeft: "10px" }}
          >
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Comidas;