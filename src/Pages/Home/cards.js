import React, { useState, useEffect } from 'react';
import "./card.css";
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

const Product_card = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const itemsCollection = collection(db, 'itens');
                const querySnapshot = await getDocs(itemsCollection);
                const itemsData = [];
                querySnapshot.forEach(doc => {
                    itemsData.push({ id: doc.id, ...doc.data() });
                });
                setItems(itemsData);
                console.log("Itens carregados", itemsData);
            } catch (error) {
                console.error('Erro ao obter os dados dos itens:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='catalogo_itens'>
            {items.map(item => (
                <div className='card' key={item.id}>
                    <div className='product_card'>
                        <a href="#"><img src={item.imageUrl} className='logo' alt="Product" /></a>
                        <h2>{item.nome}</h2>
                        <p>{item.description}</p>
                        <footer className='add_item'>
                            <span>Adicionar item</span>
                        </footer>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product_card;
