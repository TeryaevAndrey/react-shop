import React from "react";
import styles from "./Card.module.scss";

function Card({title, imgUrl, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imgUrl, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img onClick={onFavorite} src="/img/like.svg" alt="like"/>
            </div>
            <img width={133} height={112} src={imgUrl} alt="sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} alt="plus"/>
            </div>
        </div>
    );
}

export default Card;
