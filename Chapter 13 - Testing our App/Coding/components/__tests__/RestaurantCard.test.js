import React from "react";
import { screen, render } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

const MOCK_DATA = {
  info: {
    cloudinaryImageId: "",
    name: "Barbeque Nation",
    cuisines: "",
    costForTwo: "",
    sla: "",
    avgRating: "",
    cuisines: [""],
  },
};

describe("RestaurantCard component tests", () => {
  it("should render RestaurantCard comp. with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Barbeque Nation");
    expect(name).toBeInTheDocument();
  });

  it("should render RestaurantCard comp. with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);
    const name = screen.getByText("Barbeque Nation");
    expect(name).toBeInTheDocument();
  });
});
