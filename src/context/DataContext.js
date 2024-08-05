import { createContext, useState } from "react";
import { drones,users } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data,setData]=useState(drones)
    const [userList,setUserList] = useState(users)
    const [currentUser, setCurrentUser] = useState({name:'',isLoggedIn:false});
  return (
    <DataContext.Provider
      value={{
        isContextWorking: "yea",
        userList,
        data,currentUser, setCurrentUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
