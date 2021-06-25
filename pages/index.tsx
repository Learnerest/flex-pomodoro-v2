import Head from "next/head";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardComponent } from "../components/CardComponent";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <Container className="min-vh-100">
      <Head>
        <title>Flex Pomodoro Welcome Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row className="min-vh-100 justify-content-center align-items-center">
        <Row className="flex-column">
          <Row>
            <CardComponent
              title="Login"
              description="Do you have an account "
              linkTo="/login"
            />
          </Row>
          <Row className="mt-2">
            <CardComponent
              title="Register"
              linkTo="/register"
              description="If you don't have an account"
            />
          </Row>
        </Row>
      </Row>
    </Container>
  );
}
