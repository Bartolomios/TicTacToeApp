import React from 'react'
import styles from './Square.module.scss'
const Square = ({click, id, clicked, sign}) => {
   
    return (
        <button 
        className={styles.square + " " + (clicked ? (sign === "cross" ? styles.cross : styles.circle) : " ")}
        onClick={()=>click(id)}
        >
       
        </button>
    )
}

export default Square
