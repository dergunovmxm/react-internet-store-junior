import Card from "../components/Card"

const Favoutites = ({items, onAddToFavourite})  => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
                
            </div>

            <div className="d-flex flex-wrap">
                {items.map((item, index)=>(
                    <Card key={index}
                    favorited={true}
                    onFavourite={onAddToFavourite}
                    {...item}
                    />
                )) 
            }
            </div>
        </div>

    )
}

export default Favoutites