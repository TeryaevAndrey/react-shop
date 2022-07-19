import styles from "./Card.module.scss";

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/like.svg" alt="like"/>
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={styles.button}>
                    <img widht={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;
