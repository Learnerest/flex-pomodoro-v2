import React, { useState } from "react";
import { LoginController } from "../controller/LoginController";

interface loginProps {}

const register: React.FC<loginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginController>
      {({ loginWithEmailAndPassword }) => {
        return (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await loginWithEmailAndPassword(email, password);
            }}
          >
            <input
              placeholder="email"
              name="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="password"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </LoginController>
  );
};
export default register;
