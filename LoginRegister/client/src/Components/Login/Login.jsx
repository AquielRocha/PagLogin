import React,{useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Axios from 'axios';

// Import images
import video from '../../Components/LoginAssets/anime_-_84574 (Original).mp4';
import logo from '../../Components/LoginAssets/image.png';

// Import icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
// usar mesma hook dos inputs
const [LoginuserName, setLoginUserName] = useState('');
const [Loginpassword, setLoginPassword] = useState('');
const navigateTO = useNavigate()


  // Onclick para saber se o usuário entrou
  const loginuser = (e) => {

    e.preventDefault();
    // Precisa do Axios para conectar a API ao server
    Axios.post('http://localhost:3002/login', {
      // Criação de variável para mandar a rota para o server
      LoginuserName: LoginuserName,
      Loginpassword: Loginpassword,
    }).then((response) => {
      console.log()


      if(response.data.message){
        //if credential don't match
        navigateTO('/') //caso o if conste o login errado vai ficar no login
        console.log(response.data.message)
      }

      else{
        navigateTO('/dashboard')
      //se for falso vai dar acesso ao dashboard

      }

    });
  };


  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Seja uma boa pessoa Ajude as pessoas!</h2>
            <p>Adote a paz da natureza!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Você não tem uma conta? </span>
            <Link to="/register">
              <button className="btn">Inscrever-se</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Bem Vindo de Volta!</h3>
          </div>
          <form action="" className="form grid">
           {// <span className='message'>O status de login irá aqui</span>
}
            <div className="inputDiv">
              <label htmlFor="username">Usuário</label>
              <div className="input flex">
                <FaUserShield className="iconuser" />
                <input type="text" id="username" placeholder="Entrar com usuário"            
                       onChange={(event) => {
                        setLoginUserName(event.target.value);
                  }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="iconsenha" />
                <input type="password" id="password" placeholder="Digite sua senha"               
                   onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }} />
              </div>
            </div>
            
            <button type="submit" className="btn" onClick={loginuser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            
            <span className="forgotPassword">
              Esqueceu a senha? <a href="">Clique Aqui</a>
             <br /><br /><br />
            </span>

          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
