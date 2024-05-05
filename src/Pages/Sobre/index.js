import Header from "../Header";
import { useState, useEffect } from "react";
import { auth, db } from '../../firebase';

function Sobre() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const uid = user.uid;
                    const userDoc = await db.collection('users').doc(uid).get();
                    if (userDoc.exists) {
                        const userDataFromFirestore = userDoc.data(); // Obtenha os dados do Firestore
                        setUserData(userDataFromFirestore); // Atualize o estado com os dados do Firestore
                    } else {
                        console.log('Documento do usuário não encontrado no Firestore');
                    }
                } else {
                    console.log('Nenhum usuário autenticado encontrado');
                }
            } catch (error) {
                console.error('Erro ao obter os dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="MainPage">
            <Header/>
            {userData ? (
            <div>
                <p>Nome: {userData.nome}</p>
                <p>Sobrenome: {userData.sobrenome}</p>
                <p>Data de Nascimento: {userData.dataNasc}</p>
            </div>
            ) : (
            <p>Carregando dados do usuário...</p>
            )}
        </div>
    );


        

}
export default Sobre;
