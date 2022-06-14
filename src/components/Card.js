function Card() {
    return (
        <div className="card">
        <div className="favorite">
          <img width={32} height={32} src="/img/heart-unlicked.png" alt="Unlicked" />
        </div>
        <img width={133} height={112} src="/img/tapki/1.jpg" alt="Tapki" />
        <p>Мужские кроссовки Abibas air</p>
        <div className="cardBottom">
          <div className="cardPrice">
            <span>Цена:</span>
            <b>12 990 руб.</b>
          </div>
          <button>
            <img width={11} height={11} src="/img/btn-plus.png" alt="plus" />
          </button>
        </div>
      </div>
    );
}

export default Card;