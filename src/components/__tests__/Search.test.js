import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for Pizza Hut input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />{" "}
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch?.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizza Hut" } });

  fireEvent.click(searchBtn);

  expect(searchBtn).toBeInTheDocument();

  // Screen should load 1 card
  const cards = screen.getAllByTestId("resCard");
  expect(cards?.length).toBe(1);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeTopRatedFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeTopRatedFilter?.length).toBe(8);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter?.length).toBe(3);
});
