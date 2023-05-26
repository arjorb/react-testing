import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet rendering only", () => {
  render(<Greet />);
  const textElement = screen.getAllByText("Hello");
  expect(textElement).toBeInTheDocument;
});

test("Greet rendering with name", () => {
  render(<Greet name="John" />);
  const textElement = screen.getAllByText("Hello John");
  expect(textElement).toBeInTheDocument;
});
