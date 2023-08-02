import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../pages/index";

test("home", () => {
  render(<Home />);
  expect(screen.getByText("Some Text")).toBeDefined();
});
