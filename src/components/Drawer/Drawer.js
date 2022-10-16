const Drawer = ({ onCloseCart, items=[] }) => {
    return (

        <div className="overlay">

            <div className="drawer">

                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" src="/images/btn-remove.svg" alt="Close" />
                </h2>

                <div className="items flex">
                    {
                        items.map(obj => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div className="cartItemImg"
                                    style={{ backgroundImage: `url(${obj.imageUrl})`}}
                                ></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className="removeBtn" src="/images/btn-remove.svg" alt="remove" />
                            </div>
                        ))
                    }
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

                    <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer