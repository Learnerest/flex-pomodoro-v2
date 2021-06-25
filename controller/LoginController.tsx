import { ReactElement } from "react";

import firebase from "../firebase/firebaseClient";

interface LoginControllerProps {
  children({
    loginWithEmailAndPassword,
  }: {
    loginWithEmailAndPassword: (
      email: string,
      password: string
    ) => Promise<true | void>;
  }): ReactElement;
}

export const LoginController: React.FC<LoginControllerProps> = ({
  children,
}) => {
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      return alert(error.message);
    }
  };
  return children && children({ loginWithEmailAndPassword });
};
