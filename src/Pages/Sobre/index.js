import Header from "../Header";
import { useState } from 'react';
import useUserDataName from "../function/getDataName";
import ItemAdd from "../function/add_item";


function Sobre() {
    const Name = useState(useUserDataName.nome);
    const Sobrenome = useState(useUserDataName.sobrenome);
    const dataNasc = useState(useUserDataName.dataNasc);


    return (
        <div className="MainPage">
            <Header />
            {useUserDataName ? (
                <div>
                    <p>Nome: {Name}</p>
                    <p>Sobrenome: {Sobrenome}</p>
                    <p>Data de Nascimento: {dataNasc}</p>
                </div>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
            <ItemAdd />
        </div>


    );
}

export default Sobre;
