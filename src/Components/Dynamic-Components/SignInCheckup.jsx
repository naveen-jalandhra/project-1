import React, { useContext, useState } from "react";
import { LoginUser } from "./LoginUser";
import { RegisterUser } from "./RegisterUser";
import { MystoreContext } from "../Context/StoreContext";
import { App } from "../../App";

export const SignInCheckup = ({ children }) => {
  navigation;
  const { Login, setLogin, RegistrationPanel, setRegistrationPanel } =
    useContext(MystoreContext);

  if (Login === true) {
    return <>{children}</>;
  } else {
    return RegistrationPanel ? <LoginUser /> : <RegisterUser />;
  }
};
