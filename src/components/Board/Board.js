import React from 'react'
import Square from '../Square/Square'
import styles from './Board.module.scss'
const Board = ({squares, clickHandle, turn}) => {
         
    const squaresArray = squares.map(square => (
         
            <Square 
            key = { square.id }
            id = { square.id }
            sign = {square.sign}
            clicked = { square.clicked }
            click = { clickHandle } />
       
    ))

    return (
       <div className={styles.board}>
       {squaresArray}
       </div>
       
    )
}
export default Board