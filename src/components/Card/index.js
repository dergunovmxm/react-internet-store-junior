import styles from './Card.module.scss'
import { useState, useEffect } from 'react'


const Card = (props) => {

    const [isAdded, setIsAdded] = useState(false)
    
    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }


    return (

        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/images/heart-unliked.svg' alt='Unliked' onClick={props.onCkickFavourite} />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img 
                className= {styles.plus} 
                onClick = {onClickPlus} 
                src={isAdded ? "/images/btn-checked.svg" : "/images/btn-plus.svg"} 
                alt="plus" />
            </div>
        </div>
    )
}

export default Card