import "./login.css";
import Logo from '../../assets/logo.svg';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {db} from '../../firebase'




export function Enter () {

    const [senha, setSenha] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const auth = getAuth();
    const userCredential = auth.userCredential
    const handleLogin = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/home');
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                setError('Endereço de email fornecido não é válido');
            }
            if (error.code === 'auth/wrong-password' || 'auth/user-not-found') {
                setError('Email ou senha incorretos');
            }
        })

    }

    const getUsers = async () => {
        const userDataFromFirestore = "";
        try {
            const userDoc = await db.collection('users').doc( userCredential.user.uid).get();
            if (userDoc.exists) {
                const userDataFromFirestore= userDoc.data();
            } else {
                console.log('Documento do usuário não encontrado no Firestore');
            }
        } catch (error) {
            console.error('Erro ao obter os dados do usuário:', error);
        }
        return userDataFromFirestore;
    };
   
    return (
        <div className="login">
            <img src = {Logo} className='img'/>
            <form className="log">
                <div className="user">
                    <span>Email: </span><br></br>
                    <label><input type="email"  value={email} onChange={(email)=> setemail(email.target.value)}></input></label>
                </div>

                <div className="user">
                    <span>Senha: </span><br></br>
                    <label><input type="password" min={8}  value={senha} onChange={(senha)=> setSenha(senha.target.value)}></input></label>
                </div>
                
            </form>
            {error && <h4>{error}</h4>}
            <div className="forgot">
                <Link to={"/register"}>Não tem uma conta?</Link>
                <button type="submit" onClick={ handleLogin }></button>
    
            <a href="#">Esqueceu o usuário?</a>
            </div>
            

        </div>
    )
}

export default Enter;