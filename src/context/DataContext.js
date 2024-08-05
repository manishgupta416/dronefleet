import { createContext, useState } from "react";
import { drones,users } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data,setData]=useState(drones)
    const [userList,setUserList] = useState(users)
  return (
    <DataContext.Provider
      value={{
        isContextWorking: "yea",
        userList,
        data
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
