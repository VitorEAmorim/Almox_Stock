import Header from "../Header";
import { useState } from 'react';
import useUserDataName from "../function/getDataName";
import ItemAdd from "../function/add_item";
import './style.css'

function Sobre() {
    const Name = useState(useUserDataName.nome);
    const Sobrenome = useState(useUserDataName.sobrenome);
    const dataNasc = useState(useUserDataName.dataNasc);


    return (
        <div className="MainPage">
            <Header />
            <ItemAdd />
        </div>
    );
}

export default Sobre;
