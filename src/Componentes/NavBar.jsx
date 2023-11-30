import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextActives } from "../Context/ContextActives";
import { FaTasks } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";

import styles from "./NavBar.module.css";

export default function NavBar() {
  
  const {dispatch2} = useContext(ContextActives)

  return (
    <nav className={styles.boxNav}>
      <h2>To-do-List</h2>
      <ul>
        <li>
          <Link exact to='/'><FaTasks /></Link>
        </li>
        <li onClick={()=>dispatch2({type:"ACTIVE-ADD"})}>
          <MdFormatListBulletedAdd />   
        </li>
        <li>
          <Link to='/graphic'>
            <TbChartInfographic />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
