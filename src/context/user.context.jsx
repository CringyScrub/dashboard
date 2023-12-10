import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, []);

  const value = {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
