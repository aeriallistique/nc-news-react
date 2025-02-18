import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (<UserAccount.Provider value={{ loggedInUser, setLoggedInUser }}>
    {children}
  </UserAccount.Provider>);
};

export const UsersAccounts = createContext(null);

export const UsersAccountsProvider = ({ children }) => {
  const [usersAccounts, setUsersAccounts] = useState(null);

  return (<UsersAccounts.Provider value={{ usersAccounts, setUsersAccounts }}>
    {children}
  </UsersAccounts.Provider>
  );
};