import "./login.css";
import Logo from '../../assets/logo.svg';
import { useState, useEffect } from "react";
import { auth, db } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




export function Enter () {

    const [senha, setSenha] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();

    const auth = getAuth();
    const handleLogin = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage)
        });
    }

   
   
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
            <div className="forgot">
                <Link to={"/register"}>Não tem uma conta?</Link>
                <button type="submit" onClick={ handleLogin }></button>
    
            <a href="#">Esqueceu o usuário?</a>
            </div>
            

        </div>
    )
}

export default Enter;