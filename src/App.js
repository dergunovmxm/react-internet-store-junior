import Card from "./components/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

const data = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "/images/sneakers/1.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15400, imageUrl: "/images/sneakers/2.jpg" },
  { title: 'Мужские Кроссовки Max 370', price: 11200, imageUrl: "/images/sneakers/3.jpg" }
]

function App() {
  return (
    <div className="container clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {
            data.map(val => (
              <Card title={val.title}
                price={val.price}
                imageUrl={val.imageUrl} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
