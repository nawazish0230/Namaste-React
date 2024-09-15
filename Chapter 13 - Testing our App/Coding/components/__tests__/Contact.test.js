import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {
  /*
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });
  */

  it("should render contact page", () => {
    // it and test both are same | *it* is just a alias
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button from contact page", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input from contact page", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  test("should load 3 inputbox from contact page", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(3);
  });
});
