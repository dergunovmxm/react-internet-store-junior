import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favoutites from "./pages/Favoutites";


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

    axios.get('https://63440055b9ab4243cadca972.mockapi.io/favorite')
      .then((response) => {
        setFavorites(response.data)
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

  const onAddToFavourite = async (obj) => {

    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://63440055b9ab4243cadca972.mockapi.io/favorite/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id))

      } else {
        const { data } = await axios.post('https://63440055b9ab4243cadca972.mockapi.io/favorite', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error){
      alert("Не удалось добавить в закладки")
    }


  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (

    <div className="container clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route exact path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavourite={onAddToFavourite}
            />}
        />

        <Route exact path="favourites"
          element={<Favoutites
            items={favorites}
            onAddToFavourite={onAddToFavourite}
          />}
        />

      </Routes>
    </div>

  );
}

export default App;
