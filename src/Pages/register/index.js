import "./register.css";
import Logo from '../../assets/logo.svg';
import { useState } from "react";
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc  } from "firebase/firestore";
import { Link } from 'react-router-dom';




export function Login () {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [email, setemail] = useState('');
    const [dataNasc, setdataNasc] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try { 
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            const additionalData = {"nome":nome,"sobrenome":Sobrenome,"dataNasc":dataNasc };
            await saveAdditionalUserData(user.uid, additionalData);
            console.log(userCredential.user);
            navigate('/home'); 
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                setError('Email já cadastrado');
            }
        }

    }

    const saveAdditionalUserData = async (userId, data) => {
        try {
          await setDoc(doc(db, "users", userId), data);
        } catch (error) {
          throw new Error(error);
        }
    };

    const getUserNameFromFirestore = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, "users", userId));
            if (userDoc.exists()) {
                const userData = userDoc.data();
            }
        } catch (error) {
            setError('Não foi possível salvar os dados');
        }
    }

    return (
        <div className="formulario">
            <img src = {Logo} className='img'/>
            <form className="create">

                <div className="user">
                    <span>Nome: </span><br></br>
                    <label><input type="text" value={nome} onChange={(nome)=> setNome(nome.target.value) } required></input></label>
                </div>

                <div className="user">
                    <span>Sobrenome: </span><br></br>
                    <label><input type="text" value={Sobrenome} onChange={(Sobrenome)=> setSobrenome(Sobrenome.target.value)} required></input></label>
                </div>

                <div className="user">
                    <span>Email: </span><br></br>
                    <label><input type="email"  value={email} onChange={(email)=> setemail(email.target.value)} required></input></label>
                </div>

                <div className="user">
                    <span>Senha: </span><br></br>
                    <label><input type="password" min={8}  value={senha} onChange={(senha)=> setSenha(senha.target.value)} required></input></label>
                </div>

                <div className="user">
                    <span>Data de Nascimento: </span><br></br>
                    <label><input type="date" value={dataNasc} onChange={(dataNasc)=> setdataNasc(dataNasc.target.value)} required></input></label>
                </div>
                
            
                <div className="button_nav">
                    {error && <h3>{error}</h3>}
                    <Link to={"/"}><button type="submit">Login</button></Link>
                    <button type="submit" onClick={handleRegister}>Criar</button>
                    

                </div>

                
            </form>
            <div className="forgot">
            <a href="#">Esqueceu a senha?</a>
            |  
            <a href="#">Esqueceu o usuário?</a>
            </div>
            

        </div>
    )
}

export default Login;