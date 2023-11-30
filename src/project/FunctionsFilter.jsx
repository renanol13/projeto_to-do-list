import { useState } from "react";

import { FaFilter } from "react-icons/fa";

import Input from "../Componentes/Input";

import styles from "./functionsFilter.module.css";

export default function FunctionsFilter({ search, setSearch, setFilter }) {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    //Filtro de pesquisa
    <div className={styles.boxFunctions}>
      <div className={styles.boxSearch}>
        <Input
          placeholder="Pesquisar"
          name="search"
          type="search"
          customStyles="typeSearch"
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mais filtros */}
      <div className={styles.boxFilters}>
        <FaFilter
          className={styles.iconFilter}
          onClick={() => setActiveFilter(!activeFilter)}
        />
        <ul
          className={`${styles.boxUl}
        ${activeFilter ? styles["ShowFilter"] : ""}`}
        >
          <li
            onClick={(e) => setFilter('all')}>Todas
          </li>
          <li
            onClick={(e) => setFilter('complete')}>completas
          </li>
          <li
            onClick={(e) => setFilter('incomplete')}>imcompletas
          </li>
        </ul>
      </div>
    </div>
  );
}
