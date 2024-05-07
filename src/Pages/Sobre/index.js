import Header from "../Header";
import { useState, useEffect } from "react";
import { auth, db } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


function Sobre() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userRef = doc(db, "users", user.uid); // Referência para o documento do usuário
                    const userDoc = await getDoc(userRef); // Obtenção do documento
                    if (userDoc.exists()) {
                        setUserData(userDoc.data()); // Atualize o estado com os dados do Firestore
                        console.log("Dados do usuário carregados: ", userDoc.data());
                    } else {
                        console.log('Documento do usuário não encontrado no Firestore');
                    }
                } catch (error) {
                    console.error('Erro ao obter os dados do usuário:', error);
                }
            } else {
                console.log('Nenhum usuário autenticado encontrado');
                setUserData(null); // Limpe os dados do usuário se não estiver logado
            }
        });

        return () => unsubscribe(); // Limpeza na desmontagem
    }, []);

    return (
        <div className="MainPage">
            <Header />
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
