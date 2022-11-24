import Card from "../components/Card";

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavourite}) => {
    return (
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
                                onFavourite={(obj) => onAddToFavourite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                                {...item} />
                        ))
                }
            </div>
        </div>
    )
}

export default Home