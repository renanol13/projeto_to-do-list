import { useContext } from 'react'

import { ContextActives } from '../Context/ContextActives' 
import { ContextStorage } from '../Context/ContextParent'

import styles from './View.module.css'


export default function View() {
    const {dispatch2 } = useContext(ContextActives)
    const { state } = useContext(ContextStorage)
    
    return (
        <div className={styles.boxPrincipal} onClick={() => dispatch2({ type: 'HIDE-ACTIVES' })}>
            {
                state.dataView.map((elm, i) => (
                    <div className={styles.boxView} key={i}>
                        <div className={styles.boxData}>
                            <p><strong>Titulo:</strong>{elm.titulo}</p>
                            <p><strong>Categoria:</strong>{elm.categoria}</p>
                            <p><strong>Termino:</strong>{elm.date}</p>
                            <p><strong>Status:</strong>{elm.isCompleted ? 'Completa' : 'Incompleta'}</p>
                        </div>
                        <div className={styles.boxTask}>
                            <p className={styles.title}><strong>Tarefa</strong></p>
                            <p className={styles.msg}>{elm.mensagem}</p>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}
