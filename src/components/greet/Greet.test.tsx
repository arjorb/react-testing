import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greeting testing", () => {
  render(<Greet />);
  const textElement = screen.getAllByText("Hello");
  expect(textElement).toBeInTheDocument;
});
