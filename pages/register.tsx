import Head from "next/head";
import React, { useState } from "react";
import { RegisterController } from "../controller/RegisterController";

interface registerProps {}

const register: React.FC<registerProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Head>
        <title>Register Page</title>{" "}
      </Head>
      <RegisterController>
        {({ registerWithEmailAndPassword }) => {
          return (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await registerWithEmailAndPassword(email, password);
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
      </RegisterController>
    </>
  );
};
export default register;
