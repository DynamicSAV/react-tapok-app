import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские кроссовки Abibas air",
    price: 12999,
    imageUrl: "/img/tapki/1.jpg",
  },
  {
    title: "Мужские кроссовки Airmin 270",
    price: 15890,
    imageUrl: "/img/tapki/2.jpg",
  },
  {
    title: "Женские кроссовки Hike berlo",
    price: 9890,
    imageUrl: "/img/tapki/3.jpg",
  },
  {
    title: "Мужские кроссовки Nikola 1337",
    price: 20890,
    imageUrl: "/img/tapki/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentTop">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
