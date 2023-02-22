import React, { 
  createContext,
  useContext,
  useState,
  PropsWithChildren
} from "react";
import { GithubUserWGists } from "../interfaces/gist";

interface UserContent {
  userData: GithubUserWGists | null,
  setUserData: any,
}
const UserContext = createContext<UserContent>({
  userData: null,
  setUserData: () => {}
});

interface UserContextProviderProps {
  userDataInitial: {} | null
}

const UserContextProvider = ({children, userDataInitial = null}:PropsWithChildren<UserContextProviderProps>) => {
  const [userData,setUserData] = useState(userDataInitial);
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