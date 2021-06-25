import { ReactElement } from "react";

import firebase from "../firebase/firebaseClient";

interface RegisterControllerProp {
  children({
    registerWithEmailAndPassword,
  }: {
    registerWithEmailAndPassword: (
      email: string,
      password: string
    ) => Promise<true | void>;
  }): ReactElement;
}

export const RegisterController: React.FC<RegisterControllerProp> = ({
  children,
}) => {
  const registerWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      return alert(error.message);
    }
  };
  return children({ registerWithEmailAndPassword });
};
