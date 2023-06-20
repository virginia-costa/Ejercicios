import React, { useState } from "react";
import "./Uno.css";
import leftArrow from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function Uno() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate("");

  const items = [
    {
      id: 1,
      title: "Pruebas técnicas",
      content: "Resuelve las pruebas técnicas de react",
    },
    {
      id: 2,
      title: "Contenido técnico Semana 1",
      content: "Construye un passanger counter app",
    },
    {
      id: 3,
      title: "Contenido técnico Semana 2",
      content: "Crea un Appointment planner",
    },
    {
      id: 4,
      title: "Coding challenge Semana 1",
      content: "Realiza el Age Calculator",
    },
    {
      id: 5,
      title: "Coding challenge Semana 2",
      content: "Crea un Tic Tac Toe (Ta-Te-Ti)",
    },
  ];

  const goBack = () => {
    navigate(-1);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="unoContainer">
      <div className="headerContainer">
        <button className="backButton" onClick={goBack}>
          <img src={leftArrow} alt="Left Arrow" />
        </button>
        <h2 className="titleHeader">Lista</h2>
      </div>

      <ul className="listUno">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`listItem ${
              selectedItem && selectedItem.id === item.id ? "selected" : ""
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="selectedItem">
          <h3 className="eachItemTitle">{selectedItem.title}</h3>
          <p className="eachItemContent">{selectedItem.content}</p>
        </div>
      )}
    </div>
  );
}

export default Uno;
