import Header from "../Header";
import Product_card from './cards';
import "./home.css";



function Home () {
    return (
        <div className="body">
            <Header/>
            <section className="section">
                <div>
                    <Product_card/>
                </div>
            </section>
        </div>
    )
}

export default Home;