import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62b155b1e460b79df055c07a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper">
      {cardOpened && (
        <Drawer onClose={() => setCardOpened(false)} items={cartItems} />
      )}
      <Header onClickCart={() => setCardOpened(true)} />
      <div className="content">
        <div className="contentTop">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log('Добавлено в закладки')}
              onClickAdd={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
