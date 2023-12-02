import { FaEye, FaEdit } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import FormNewTask from "../Componentes/FormNewTask";

import { useContext } from "react";
import { ContextStorage } from "../Context/ContextParent";
import { ContextActives } from "../Context/ContextActives";

import styles from "./TaskCard.module.css";

export default function TaskCard({ titulo, id , date, isCompleted }) {
  const { state, dispatch } = useContext(ContextStorage);
  const { dispatch2 } = useContext(ContextActives);

  const viewTask = () => {
    dispatch2({ type: "ACTIVE-VIEW" });
    dispatch({ type: "VIEW-DATA", payload: id });
  };

  const completeTaskOnOff = () => {
    dispatch({ type: "COMPLETED-TASK", payload: id });
  };

  const editTask = () => {
    dispatch2({ type: "ACTIVE-ADD" });
    dispatch({ type: "EDIT-DATA", payload: id });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE-ELEMENT", payload: id });
  };

  return (
    <>
      <div
        className={`${styles.boxCard} ${
          isCompleted ? styles["incomplete"] : ""
        }`}
      >
        <div className="cardContent">
          <p>
            <strong>Titulo:</strong> {titulo.toLowerCase()}
          </p>
          <p>
            <strong>Termino: </strong>{date}
          </p>
        </div>

        {/* Controles */}
        <div className={styles.boxControl}>
          <button onClick={() => viewTask()}>
            <FaEye />
          </button>
          <button
            className={`${isCompleted ? styles["incompleteIcon"] : ""}`}
            onClick={() => completeTaskOnOff()}
          >
            <MdOutlineTaskAlt />
          </button>
          <button onClick={() => editTask()}>
            <FaEdit />
          </button>
          <button onClick={() => deleteTask()}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
