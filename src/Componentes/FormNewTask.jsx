import { useContext, useState } from 'react';
import { ContextStorage } from '../Context/ContextParent';
import { ContextActives } from '../Context/ContextActives';
import Input from '../Componentes/Input'

import Button from "./button";

import styles from "./FormNewTask.module.css";


export default function FormNewTask() {

  const [data, setData] = useState({})
  const { dispatch } = useContext(ContextStorage)
  const {dispatch2} = useContext(ContextActives)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type:"ADD-OBJECT", payload:data})
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      isCompleted: false
    })
    console.log(data.date);
  }


  return (
    <div className={styles.boxPrincipal}>
      <form className={styles.boxForm} onSubmit={handleSubmit}>
        <div className={styles.boxEntrada}>
          <Input
            name="titulo"
            value={data.titulo ? data.titulo : ''}
            placeholder="Insira um titulo"
            handleChange={handleChange}
            customStyles='typeForm'
          />
        </div>

        <div className={styles.boxEntrada}>
          <p>Prazo</p>
          <Input type="date"
            name="date"
            value={data.date ? data.date : ''}
            handleChange={handleChange}
            customStyles = 'typeForm'
          />
        </div>

        <div className={styles.boxEntrada}>
          <textarea name="mensagem" value={data.mensagem ? data.mensagem : ''}placeholder="O que deve ser Feito?" onChange={handleChange} />
        </div>

        <div className={styles.boxEntrada}>
          <select  name="categoria" value={data.categoria ? data.categoria : ''} onChange={handleChange}>
            <option value="">Selecione uma Opção</option>
            <option value="pessoal">Pessoal</option>
            <option value="trabalho">Trabalho</option>
            <option value="desejos">Lista de desejos</option>
          </select>
        </div>

        <Button text='Salvar'/>
      </form>
    </div>
  );
}
