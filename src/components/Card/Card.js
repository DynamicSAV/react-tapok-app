import React from 'react';
import styles from './Card.module.scss';

function Card({onClickFavorite, onClickAdd, title, imageUrl, price}){
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onClickAdd({title, imageUrl, price})
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          width={32}
          height={32}
          src="/img/heart-unlicked.png"
          alt="Unlicked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Tapki" />
      <p>{title}</p>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={26}
          height={26}
          src={isAdded ? '/img/btn-checked.png' : '/img/btn-plus.png'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
