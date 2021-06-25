import React from "react";
interface AboutContentProps {
  message: string;
}

export const AboutContent = ({ message }: AboutContentProps) => {
  return <div>{message}</div>;
};
