import { useState } from 'react';

type AuthUser = {
  name: string
  beers: number
}

export const User = () => {
  const [user, setUser] =  useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: 'Juca',
      beers: 26,
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>{user?.name} can have {user?.beers} beers</div>
    </div>
  );
}
