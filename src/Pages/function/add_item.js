import { useState } from "react";
import { db } from '../../firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export function ItemAdd () {

    const [nome, setNome] = useState('');
    const [description, setDescrition] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [imageUrl, setImageUrl] = useState('');
    const [status] = useState(true);
    const [error, setError] = useState('');


    const handleCreate = async (event) => {
            event.preventDefault();
            try {
                const item = {"nome":nome,"description":description,"quantidade":quantidade, "status":status, "imageUrl":imageUrl};
                await saveItemInFirebase(item);
                alert("O item foi criado com sucesso!")
            } catch (error) {
                setError(error.code);
                alert("Ocorreu algum erro!" + error.code)

            }
    }

    const saveItemInFirebase = async (data) => {
        try {
          await addDoc(collection(db, "itens"), data);
        } catch (error) {
          throw new Error(error);
        }
    };

    return (
        <div className="formulario_item">
            <form className="create">
                <div className="item">
                    <span>Nome: </span><br></br>
                    <label><input required type="text" maxLength={15} value={nome} onChange={(nome)=> setNome(nome.target.value)}></input></label>
                </div>

                <div className="item">
                    <span>Descrição: </span><br></br>
                    <label><input required type="text" maxLength={45} value={description} onChange={(description)=> setDescrition(description.target.value)}></input></label>
                </div>

                <div className="item">
                    <span>Quantidade: </span><br></br>
                    <label><input required type="number"  value={quantidade} onChange={(quantidade)=> setQuantidade(quantidade.target.value)}></input></label>
                </div>

                <div className="item">
                    <span>Imagem: </span><br></br>
                    <label><input required type="url"  placeholder='Cole o link da imagem' value={imageUrl} onChange={(imageUrl)=> setImageUrl(imageUrl.target.value)}></input></label>
                </div>
                
                <div className="button_nav">
                    {error && <h3>{error}</h3>}
                    <button type="submit" onClick={handleCreate}>Criar</button>
                    

                </div>
            </form>
        </div>       
    )
}

export default ItemAdd;