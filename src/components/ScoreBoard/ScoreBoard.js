import React from 'react'
import styles from './ScoreBoard.module.scss'
import RestartButton from '../RestartButton/RestartButton'

const ScoreBoard = ({turn, win , draw, restart}) => {

    
    const score = () =>{
        let result;
        if(win){
         result = <div className={styles.scoreBoard}>
                <h3>{turn ? "Circle" : "Cross"} wins!</h3>
                {<RestartButton restart={restart}/>}
        </div>
        }
        else if(draw)
        {
            result = <div className={styles.scoreBoard}>
                <h3>It's Draw!!</h3>
                {<RestartButton restart={restart} />}
            </div>
        }
        else {
            result=null
        }
        return result;
    }

    return (
        <>
        {score()}
        </>
    )
}

export default ScoreBoard
