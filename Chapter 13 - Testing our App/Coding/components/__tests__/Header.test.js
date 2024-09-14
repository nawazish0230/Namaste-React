import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";

describe("Header page test cases", () => {
  it("should render Header comp. with login button", () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const login = screen.getByRole("button", { name: "Login" });
    expect(login).toBeInTheDocument();
  });

  it("should render Header comp. with cart item", () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const cartText = screen.getByText(/Cart - /);
    expect(cartText).toBeInTheDocument();
  });

  it("should change login button to logout on click", () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const cartText = screen.getByText(/Cart - /);
    expect(cartText).toBeInTheDocument();
  });
});
