import React from "react";
import SqlCodeCard from "../components/card.js";
//import Head from "../components/head.js";
//import "../style.css";*/

const Home = () => {
  const sqlCodes = [
    {
      enunciado: "V",
      titulo: "Consulta 1",
      codigo: "SELECT * FROM users WHERE age > 18;"
    },
    {
      enunciado: "primeira consulta",
      titulo: "Consulta 2",
      codigo: "SELECT name, email FROM customers WHERE country = 'Brazil';"
    },
  ];

  return (
      <div className="card-container">
        {sqlCodes.map((codeObj, index) => (
          <div className="card" key={index}>
            <div className="card-enunciado">{codeObj.enunciado}</div>
            <div className="card-content">
              <SqlCodeCard titulo={codeObj.titulo} codigo={codeObj.codigo} />
            </div>
          </div>
        ))}
      </div>
  );
};

export default Home;