import { useState } from 'react';

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>{isLoggedIn ? 'User is online' : 'User is offline'}</div>
    </div>
  );
}
