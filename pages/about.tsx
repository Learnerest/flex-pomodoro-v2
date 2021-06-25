import React from "react";
import Head from "next/head";
interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <p>About page</p>
    </div>
  );
};
export default about;
