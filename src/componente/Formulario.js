import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Formulario = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setLoggedIn(true);
        setUsername(storedUsername);
      }
    }, []);
  
    if (!loggedIn) {
      return <Navigate to="/" />;
    }
  
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        {/* TODO: add the rest of your app */}
      </div>
    );
}
export default Formulario