import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://62d7ae6051e6e8f06f205559.mockapi.io/items")
            .then(res => {
                return res.json();
            })
            .then(json => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder="Поиск ..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        items.map((sneakers, index) => (
                            <Card
                                title={sneakers.title}
                                price={sneakers.price}
                                imgUrl={sneakers.imgUrl}
                                onFavorite={() => console.log("Добавили в закладки")}
                                onPlus={obj => onAddToCart(obj)}
                                key={Math.floor(Math.random())}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
