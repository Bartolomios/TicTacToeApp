import React from 'react'
import styles from './RestartButton.module.scss';
const RestartButton = ({restart}) => {
    return (
   <button className={styles.restartButton} onClick={restart}>Try Agin!</button>
    )
}

export default RestartButton
