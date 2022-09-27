function App() {
  return (
    <div className="container clear">
      <div className="overlay">

        <div className="drawer">

          <h2 className="mb-30 d-flex justify-between">
            Корзина 
            <img className="removeBtn cu-p" src="/images/btn-remove.svg" alt="remove" />
          </h2>

          <div className="items flex">

            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg"
                style={{ backgroundImage: 'url(/images/sneakers/2.jpg)' }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/images/btn-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg"
                style={{ backgroundImage: 'url(/images/sneakers/3.jpg)' }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/images/btn-remove.svg" alt="remove" />
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
                <b>1074 руб</b>
              </li>
            </ul>

            <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="arrow"/></button>
          </div>

        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">

          <img width={40} height={40} src="/images/img1.png" alt="sneakers" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src='/images/cart.svg' alt="sneakers" />
            <span>7897897</span>
          </li>
          <li>
            <img width={18} height={18} src='/images/user.svg' alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src='/images/heart-unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src="/images/sneakers/1.jpg" alt="sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/sneakers/2.jpg" alt="sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/sneakers/3.jpg" alt="sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/sneakers/4.jpg" alt="sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
