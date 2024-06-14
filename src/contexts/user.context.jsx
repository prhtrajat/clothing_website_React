import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../utils/Firebase/Firebase.utils";

export const UserContext = createContext({

  currentUser: null,
  setCurrentUser: () => null

})



export const UserProvider = ({ children }) => {

  useEffect(()=>{

    const unSubscribe = onAuthStateChangedListner((user)=>{
      if(user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    })
  
    return unSubscribe;
  
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}