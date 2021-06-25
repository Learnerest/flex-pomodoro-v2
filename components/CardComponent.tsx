import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
interface CardProps {
  title: string;
  description: string;
  linkTo?: string;
}

export const CardComponent = ({ description, title, linkTo }: CardProps) => {
  return (
    <Link href={linkTo ?? ""}>
      <Card style={{ width: "18rem", cursor: linkTo ? "pointer" : "unset" }}>
        <Card.Body>
          <Card.Title>
            <h3>{title}&rarr;</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
