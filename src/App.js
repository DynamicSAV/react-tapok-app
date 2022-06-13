function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img height={40} width={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React tapok</h3>
            <p>Магазин лучших тапочек</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.png" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.png" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/tapki/1.jpg" alt="Tapki" />
            <p>Мужские кроссовки Abibas air</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/tapki/2.jpg" alt="Tapki" />
            <p>Мужские кроссовки Abibas air</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/tapki/3.jpg" alt="Tapki" />
            <p>Мужские кроссовки Abibas air</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/tapki/3.jpg" alt="Tapki" />
            <p>Мужские кроссовки Abibas air</p>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;