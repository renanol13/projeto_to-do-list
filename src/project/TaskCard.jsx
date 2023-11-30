import { FaEye, FaEdit } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { useEffect } from "react";
import { ContextStorage } from "../Context/ContextParent";
import { ContextActives } from "../Context/ContextActives";
import styles from "./TaskCard.module.css";

export default function TaskCard({ titulo, categoria, date, isCompleted}) {
  const { dispatch } = useContext(ContextStorage);
  const { dispatch2 } = useContext(ContextActives)
  

  return (
    <>
      <div className={`${styles.boxCard} ${isCompleted ? styles['incomplete']: ''}`}>
        <div className="cardContent">
          <p><strong>Titulo:</strong> {titulo}</p>
          <p><strong>Termino: </strong>{date}</p>
        </div>
        {/* Controles de funções dos icons */}
        <div className={styles.boxControl}>
          <button onClick={() => {
            dispatch2({ type: "ACTIVE-VIEW" })
            dispatch({type:'VIEW-DATA', payload:titulo})}}>
            <FaEye/>
          </button>
          <button
            onClick={() => dispatch({ type: 'COMPLETED-TASK', payload: titulo })}
            className={`${isCompleted ? styles['incompleteIcon']: ''}`}>
            <MdOutlineTaskAlt />
          </button>
          <button>
            <FaEdit />
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE-ELEMENT", payload: titulo })}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
