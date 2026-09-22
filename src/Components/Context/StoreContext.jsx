import { createContext, useEffect, useState } from "react";

export let MystoreContext = createContext();

export let ContextFnc = ({ children }) => {
  const [Login, setLogin] = useState(false);
  const [Accounts, setAccounts] = useState([]);
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [RegistrationPanel, setRegistrationPanel] = useState(true);
  let CheckLogFnc = () => {
    let IsExist = Accounts.find(
      (User) => User.Email === UserEmail && User.Password === UserPassword,
    );

    if (IsExist) {
      setLogin(true);
      return true;
    } else {
      setLogin(false);
      return false;
    }
  };

  return (
    <MystoreContext.Provider
      value={{
        Login,
        setLogin,
        CheckLogFnc,
        Accounts,
        setAccounts,
        UserEmail,
        setUserEmail,
        UserPassword,
        setUserPassword,
        RegistrationPanel,
        setRegistrationPanel,
      }}
    >
      {children}
    </MystoreContext.Provider>
  );
};
