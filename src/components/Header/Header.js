import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../context"

const Header = (props) => {

    const { cartItems } = useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return (

        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">

                    <img width={40} height={40} src="/images/img1.png" alt="sneakers" />

                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src='/images/cart.svg' alt="sneakers" />
                    <span>{totalPrice} руб.</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src='/images/favorite.svg' alt="user" />
                    </Link>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/orders">
                        <img width={18} height={18} src='/images/user.svg' alt="user" />
                    </Link>
                </li>
            </ul>
        </header>

    )
}

export default Header