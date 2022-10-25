import { Link } from "react-router-dom"

const Header = (props) => {

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
                    <span>7897897</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favotires">
                        <img width={18} height={18} src='/images/favorite.svg' alt="user" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src='/images/user.svg' alt="user" />
                </li>
            </ul>
        </header>

    )
}

export default Header