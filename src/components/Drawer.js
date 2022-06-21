function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            width={32}
            height={32}
            src="/img/cancel.png"
            alt="Remove"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="Sneakers"
              />
              <div className="cartItemText">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/btn-remove.png"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>9999 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ{' '}
            <img width={23} height={23} src="/img/arrow.png" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
