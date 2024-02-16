import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setLoggedIn(true);
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div>
          <p>¡Bienvenido! Has iniciado sesión correctamente.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      )}
    </div>
  );
};

export default Login;

