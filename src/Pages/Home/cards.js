import React, { Component } from 'react';
import { useState } from "react";
import "./card.css";


const Product_card = () => {
    const [item] = useState({ name: 'Caneta', description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", imagem:"https://img.kalunga.com.br/fotosdeprodutos/176072z_1.jpg" });
    return(
        <div className='product_card'>
            <img src = {item.imagem} className='logo'/>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <footer className='add_item'>
                <span>Adicionar item</span>
            </footer>
        </div>
    )
}

export default Product_card;