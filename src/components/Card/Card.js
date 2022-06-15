import styles from './Card.module.scss';


function Card(props) {
  return (
    <div className={styles.card}>
      <div className="favorite">
        <img
          width={32}
          height={32}
          src="/img/heart-unlicked.png"
          alt="Unlicked"
        />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Tapki" />
      <p>{props.title}</p>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button onClick={props.onClick}>
          <img width={11} height={11} src="./img/btn-plus.png" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
