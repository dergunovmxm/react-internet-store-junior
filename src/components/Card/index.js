import styles from './Card.module.scss'
import { useState, useEffect } from 'react'


const Card = ({price, imageUrl, title, onFavourite, onPlus}) => {

    const [isAdded, setIsAdded] = useState(false)
    
    const onClickPlus = () => {
        onPlus({title, price, imageUrl})
        setIsAdded(!isAdded)
    }

    return (

        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/images/heart-unliked.svg' alt='Unliked' onClick={onFavourite} />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
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