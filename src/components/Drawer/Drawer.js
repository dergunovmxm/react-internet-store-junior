const Drawer = ({ onCloseCart, onRemove, items=[] }) => {
    return (

        <div className="overlay">

            <div className="drawer">

                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" src="/images/btn-remove.svg" alt="Close" />
                </h2>

                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width={120} height={120} src="/images/cart-empty.svg" alt="Empty"/>
                    <h2>Корзина пустая</h2>
                    <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                    <button className="greenButton">
                        <img src="/images/arrow.svg" alt="Arrow" />
                        Вернуться назад
                    </button>

                </div>

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
                                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/images/btn-remove.svg" alt="remove" />
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