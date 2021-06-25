import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default _app;
