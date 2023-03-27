import React from "react"
import { useState } from "react";


const Login = () => {
    

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic
    if (username === 'myusername' && password === 'mypassword') {
        localStorage.setItem('username', username);
      }
      
  };


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                 <label htmlFor="username" class="form-label">Nombre Usuario</label>
                 <input type="text" id="username" value={username} onChange={handleUsernameChange} class="form-control" />
            </div>

            <div class="mb-3">
                <label htmlFor="password" class="form-label">Contraseña</label>
                <input type="password" id="password" value={password} onChange={ handlePasswordChange } class="form-control"  />
            </div>
                <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
                </form>
        </div>
    )
}
export default Login 