import { FaEye, FaEdit } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import FormNewTask from "../Componentes/FormNewTask";

import { useContext } from "react";
import { ContextStorage } from "../Context/ContextParent";
import { ContextActives } from "../Context/ContextActives";

import styles from "./TaskCard.module.css";

export default function TaskCard({ titulo, categoria, date, isCompleted}) {
  const { state, dispatch } = useContext(ContextStorage);
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
          {/* visualizar */}
          <button onClick={() => {
            dispatch2({ type: "ACTIVE-VIEW" })
            dispatch({type:'VIEW-DATA', payload:titulo})}}>
            <FaEye/>
          </button>
          {/* completar ou Vice-Versa */}
          <button
            onClick={() => dispatch({ type: 'COMPLETED-TASK', payload: titulo })}
            className={`${isCompleted ? styles['incompleteIcon']: ''}`}>
            <MdOutlineTaskAlt />
          </button>
          {/* Editar */}
          <button
            onClick={() => {
              dispatch2({ type: 'ACTIVE-ADD' })
              dispatch({ type: 'EDIT-DATA', payload: titulo })
            }}
          >
            <FaEdit />
          </button>
          {/* Excluir */}
          <button
            onClick={() => dispatch({ type: "DELETE-ELEMENT", payload: titulo })}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
