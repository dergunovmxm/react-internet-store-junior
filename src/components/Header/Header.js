

const Header = () => {
    return (

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

    )
}

export default Header