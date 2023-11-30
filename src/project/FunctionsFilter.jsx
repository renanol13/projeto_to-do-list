import { useState } from "react";


import { RiMenuSearchLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";

import Input from "../Componentes/Input";

import styles from "./functionsFilter.module.css";

export default function FunctionsFilter({search, setSearch }) {

  return (
    <div className={styles.boxFunctions}>
      <div className={styles.boxSearch}>
        <Input
          placeholder="Pesquisar"
          name="search"
          type="search"
          customStyles="typeSearch"
          value={search}
          handleChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <div className={styles.boxFilters}>
        <ul className={styles.boxUl}>
            <FaFilter/>
            <li>Alfabetica</li>
            <li>Data</li>
            <li>Data Limite</li>
        </ul>
      </div>
    </div>
  );
}
