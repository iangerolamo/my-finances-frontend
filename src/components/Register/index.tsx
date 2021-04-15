import React, { useState } from 'react';
import './styles.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function register() {
    console.log({
      "e-mail" : email,
      "password" : password,
      "password again" : passwordAgain
    })
  }

  return (
    <div className="register">
    <div className="register-header">
      <h1>Faça o seu cadastro</h1>
    </div>
    <div className="register-form">
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
        onChange={e => setPassord(e.target.value)}
      />
      <br/>
      <h3>Digite sua senha novamente:</h3>
      <input 
        type="password" 
        placeholder="Digite sua senha novamente"
        value={passwordAgain}
        onChange={e => setPasswordAgain(e.target.value)}
      />
      <br/>
      <input onClick={register} type="button" value="Login" className="login-button"/>
      <br />
      <a href="/" className="sign-in">Voltar para login!</a>
    </div>
  </div>
  ) 
}

export default Register;