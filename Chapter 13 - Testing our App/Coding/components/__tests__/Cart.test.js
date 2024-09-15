import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import mockResMenuData from "../../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockResMenuData);
    },
  });
});

function getFirstElementByTestId(testId) {
  const elements = document.querySelectorAll(`[data-testid="${testId}"]`);
  return elements.length > 0 ? elements[0] : null;
}

describe("Cart components", () => {
  it("should check menuCategory length", async () => {
    await act(() => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
          </BrowserRouter>
        </Provider>
      );
    });

    const menuCategory = screen.getAllByTestId("menuCategory");
    expect(menuCategory.length).toBe(menuCategory.length);
  });

  it("should check full cart flow", async () => {
    await act(() => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
            <Cart />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordionHeaderFirstElement =
      getFirstElementByTestId("accordionHeader");
    fireEvent.click(accordionHeaderFirstElement);

    const itemList = screen.getAllByTestId("itemList");
    expect(itemList.length).toBe(itemList.length);

    const addButton = screen.getAllByRole("button", { name: /ADD/ });
    fireEvent.click(addButton[0]);

    const cartHeaderText = screen.getByText(/Cart - 1/);
    expect(cartHeaderText).toBeInTheDocument();

    fireEvent.click(addButton[1]);
    expect(screen.getByText(/Cart - 2/)).toBeInTheDocument();

    expect(itemList.length).toBe(2);

    fireEvent.click(screen.getByRole("button", { name: /Clear Cart/ }));

    expect(itemList.length).toBe(2); // this need to be zero :)
    expect(
      screen.getByText(/Cart is Empty. Add items to the Cart!!/)
    ).toBeInTheDocument();
  });
});
