import { createContext, useState } from "react";

const hardCodedUser = {
  username: "tickle122",
  name: "Tom Tickle",
  avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
};

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(hardCodedUser);

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