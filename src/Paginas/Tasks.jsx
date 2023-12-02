import { useContext, useState } from "react";

import FormNewtask from "../Componentes/FormNewTask";
import TaskCard from "../project/TaskCard";
import FunctionsFilter from "../project/FunctionsFilter";
import View from "../Componentes/View";
import { ContextStorage } from "../Context/ContextParent";
import { ContextActives } from "../Context/ContextActives";

import styles from "./Tasks.module.css";

export default function Tasks() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { state } = useContext(ContextStorage);
  const { state2 } = useContext(ContextActives);

  return (
    <div className={styles.boxPrincipal}>
      {state2.activeAdd && <FormNewtask />}
      {/*Pop ps*/}
      {state2.activeView && <View />}
      <FunctionsFilter
        search={search}
        setSearch={setSearch}
        setFilter={setFilter}
      />

      <div className={styles.boxContent}>
        <h2>
          {filter === "all"
            ? "Todas tarefas:"
            : filter === "complete"
            ? "Tarefas Completas:"
            : "Tarefas Incompletas:"}
        </h2>
        {/* Filtragem de dados */}
        {state.data.length === 0 ? (
          <p className={styles.msg}>
            Ainda não há tarefas para serem mostradas aqui...
          </p>
        ) : (
          state.data
            .filter((elm) =>
              filter == "all"
                ? true
                : filter === "complete"
                ? elm.isCompleted
                : !elm.isCompleted
            )
            .filter((elm) => elm.titulo.toUpperCase().includes(search.toUpperCase()))
            .map((elm) => (
              <TaskCard
                key={elm.id}
                titulo={elm.titulo}
                categoria={elm.categoria}
                date={elm.date}
                isCompleted={elm.isCompleted}
                id={elm.id}
              />
            ))
        )}
      </div>
    </div>
  );
}
