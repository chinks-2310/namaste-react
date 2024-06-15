import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });
  it("Should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load the button contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load the input name contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // returns the jsx element
    expect(inputBoxes?.length).toBe(2);
  });
});
