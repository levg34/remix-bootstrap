import type { MetaFunction } from "@remix-run/node";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Bootstrap Test" },
    { name: "description", content: "Test!" },
  ];
};

export default function Index() {
  return (
    <Container>
      Test <Button>Test</Button>
    </Container>
  );
}
