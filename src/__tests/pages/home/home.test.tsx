import { render, fireEvent, screen } from "@testing-library/react";
import Router from "react-router-dom";

import Home from "../../../pages/home";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<SearchDevs />", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(Router, "useNavigate").mockImplementation(() => navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getSearchInput = () => screen.getByRole("textbox", { name: /search/i });
  const getSearchButton = () => screen.getByRole("button", { name: /search/i });

  it("should render correctly", () => {
    render(<Home />);

    expect(getSearchInput()).toBeInTheDocument();
    expect(getSearchButton()).toBeInTheDocument();
  });

  it("should navigate to profile page when Enter is pressed", () => {
    render(<Home />);

    const searchInput = getSearchInput();

    fireEvent.change(searchInput, { target: { value: "username" } });
    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(navigate).toHaveBeenCalledWith("/profile/username");
  });

  it("should navigate to profile page when Search button is clicked", () => {
    render(<Home />);

    fireEvent.change(getSearchInput(), { target: { value: "username" } });
    fireEvent.click(getSearchButton());

    expect(navigate).toHaveBeenCalledWith("/profile/username");
  });
});
