import { useState, useContext } from "react";

import FormNewtask from "../Componentes/FormNewTask";
import TaskCard from "../project/TaskCard";
import FunctionsFilter from "../project/FunctionsFilter";
import View from "../Componentes/View";
import { ContextStorage } from "../Context/ContextParent";
import { ContextActives } from "../Context/ContextActives";

import styles from "./Tasks.module.css";


export default function Tasks() {
  const [search, setSearch] = useState("");
  const {state, dispatch } = useContext(ContextStorage);
  const {state2} = useContext(ContextActives)

  return (
    <div className={styles.boxPrincipal}>

      {/*Popups*/}
        {state2.activeView && <View/>}
        {state2.activeAdd && <FormNewtask />}
        <FunctionsFilter search={search} setSearch={setSearch} />
      

       {/* Filtragem de dados */}
      <div className={styles.boxContent}>
        {state.data.length === 0
          ? <p className={styles.msg}>Ainda não há tarefas para serem mostradas aqui...</p>
          : state.data
          .filter((elm)=> elm.titulo.includes(search))
          .map((elm, i) => (
            <TaskCard
              key={i}
              titulo={elm.titulo}
              categoria={elm.categoria}
              date={elm.date}
              isCompleted={elm.isCompleted}
            />
            ))
        }
        </div>
      
      </div>
  );
}
