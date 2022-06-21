function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img height={40} width={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>React tapok</h3>
          <p>Магазин лучших тапочек</p>
        </div>
      </div>
      <ul className="headerRight">
        <li className="openCard" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.png" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.png" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
