import React, { useState } from 'react';
import './styles.css';
import api from '../../service/api';


const Login: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function entrar() {
    api.post('user/authenticate', {
      email: email,
      password: password
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data)
    });
      
  }

  return (
    <div className="login">
      <div className="login-header">
        <h1>Faça o seu login</h1>
      </div>
      <div className="login-form">
        <h3>Digite seu e-mail:</h3>
        <input 
          type="text" 
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <h3>Digite sua senha:</h3>
        <input 
          type="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <input onClick={entrar} type="button" value="Login" className="login-button"/>
        <br />
        <a href="/signup" className="sign-up">Faça seu cadastro!</a>
      </div>
    </div>
  )
}

export default Login;