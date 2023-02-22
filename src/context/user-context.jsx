import React, { createContext, useContext, useState } from "react";


const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [userData,setUserData] = useState(null);
  const value = {userData, setUserData}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUserData = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('getUserData must be used with a UserProvider');
  }
  return context;
}

export {UserContextProvider, useUserData}