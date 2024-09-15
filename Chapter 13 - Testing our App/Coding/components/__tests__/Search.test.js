import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockResListData from "../../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockResListData);
    },
  });
});

describe("search flow testing", () => {
  it("should search for restaurant list with burger input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeSearch.length).toBe(cardsBeforeSearch.length);

    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsAfterSearch.length).toBe(cardsAfterSearch.length);
  });

  it("should render top rated restaurant list", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeFilter.length).toBe(cardsBeforeFilter.length);

    const topRatedButton = screen.getByRole("button", {
      name: /Top Rated Restaurants/,
    });
    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsAfterFilter.length).toBe(cardsAfterFilter.length);
  });
});
``;
