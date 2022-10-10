import { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";



function App() {

  const [items, setItems] = useState([])

  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {

    fetch('https://63440055b9ab4243cadca972.mockapi.io/items')
      .then(response => {
        return response.json()
      })
      .then(json => {
        setItems(json)
      })

  }, [])


  return (
    <div className="container clear">
      {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null}
      <Header
        onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map(val => (
              <Card
                title={val.title}
                price={val.price}
                imageUrl={val.imageUrl}
                onCkickFavourite={() => alert(`Добавлено в закладки ${val.title}`)}
                onClickPlus={() => alert(val.title)} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
