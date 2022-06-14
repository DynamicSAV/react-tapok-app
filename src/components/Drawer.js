function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            className="removeBtn"
            width={32}
            height={32}
            src="/img/cancel.png"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem">
            <img width={70} height={70} src="/img/tapki/1.jpg" alt="Sneakers" />
            <div className="cartItemText">
              <p>Мужские кроссовки Abibas air</p>
              <b>12 990 руб.</b>
            </div>
            <img
              className="removeBtn"
              width={32}
              height={32}
              src="/img/btn-remove.png"
              alt="Remove"
            />
          </div>

          <div className="cartItem">
            <img width={70} height={70} src="/img/tapki/2.jpg" alt="Sneakers" />
            <div className="cartItemText">
              <p>Мужские кроссовки Abibas air</p>
              <b>12 990 руб.</b>
            </div>
            <img
              className="removeBtn"
              width={32}
              height={32}
              src="/img/btn-remove.png"
              alt="Remove"
            />
          </div>
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
            Оформить заказ{" "}
            <img width={23} height={23} src="/img/arrow.png" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
