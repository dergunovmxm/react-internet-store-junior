import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import axios from "axios"
import Card from "./components/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";



function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {

    axios.get('https://63440055b9ab4243cadca972.mockapi.io/items')
      .then((response) => {
        setItems(response.data)
      })

    axios.get('https://63440055b9ab4243cadca972.mockapi.io/cart')
      .then((response) => {
        setCartItems(response.data)
      })

  }, [])

  const onAddToCart = (obj) => {

    axios.post('https://63440055b9ab4243cadca972.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63440055b9ab4243cadca972.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavourite = (obj) => {

    axios.post('https://63440055b9ab4243cadca972.mockapi.io/favorite', obj)
    setFavorites((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="container clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
      
      <Route path="/favotires"><Header onClickCart={() => setCartOpened(true)} /></Route>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{
            searchValue ? `Поиск о запросу "${searchValue}"` : "Все кроссовки"
          }</h1>
          <div className="search-block d-flex">
            {
              searchValue && <img className="clear cu-p"
                src="/images/btn-remove.svg"
                alt="Close"
                onClick={() => setSearchValue('')} />
            }

            <img src="/images/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              placeholder="Поиск..."
              value={searchValue} />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavourite={(obj) => onAddToFavourite(obj)}
                  onPlus={(obj) => onAddToCart(obj)} />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
