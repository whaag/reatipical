import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const handleLogin = () => {
      userContext.setUser({
        name: 'Juca Bala',
        email: 'juca@bala.com'
      });
  };
  const handleLogout = () => {
      userContext.setUser({
        name: '',
        email: '',
      });
  };
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> 
        { userContext.user.name } is online @ { userContext.user.email }
      </div>
    </div>
  )
}