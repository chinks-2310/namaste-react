import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from '../Cart'
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );
  const accordingHeader = screen.getByText("Cold Beverages (4)");
  fireEvent.click(accordingHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems?.length).toBe(4);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems")?.length).toBe(6);

  const clearCartBtn = screen.getByTestId("clearCartBtn")
  fireEvent.click(clearCartBtn)
  expect(screen.getAllByTestId("foodItems")?.length).toBe(4)
  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument()
});
