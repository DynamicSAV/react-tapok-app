import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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

          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;