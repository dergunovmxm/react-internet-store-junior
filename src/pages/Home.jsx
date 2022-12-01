import Card from "../components/Card";

const Home = ({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite,  isLoading }) => {

    const renderItems = () => {
        const filteredItems = items && items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(8)] : filteredItems)
            .map((item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item} />
            ))

    }

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

            <div className=" d-flex flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home