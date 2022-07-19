import "./App.scss";
import Header from "./components/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";

const sneakersItems = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imgUrl: '/img/sneakers/1.jpg'
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12312,
        imgUrl: '/img/sneakers/2.jpg'
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 43432,
        imgUrl: '/img/sneakers/3.jpg'
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12353,
        imgUrl: '/img/sneakers/4.jpg'
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 11123,
        imgUrl: '/img/sneakers/5.jpg'
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 4123,
        imgUrl: '/img/sneakers/6.jpg'
    }
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>

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
                        sneakersItems.map(sneakers => (
                            <Card
                                title={sneakers.title}
                                price={sneakers.price}
                                imgUrl={sneakers.imgUrl}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
