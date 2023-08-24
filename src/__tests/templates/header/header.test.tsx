import { render, fireEvent, screen } from "@testing-library/react";
import Router from "react-router-dom";

import Header from "../../../templates/header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Header />", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(Router, "useNavigate").mockImplementation(() => navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getLogo = () => screen.getByRole("heading", { name: "Search d_evs" });
  const getSearchInput = () => screen.getByRole("textbox", { name: /search/i });
  const getSearchButton = () =>
    screen.queryByRole("button", { name: /search/i });

  it("should render correctly", () => {
    render(<Header />);

    expect(getLogo()).toBeInTheDocument();
    expect(getSearchInput()).toBeInTheDocument();
    expect(getSearchButton()).not.toBeInTheDocument();
  });

  it("should navigate to profile page when Enter is pressed", () => {
    render(<Header />);

    const searchInput = getSearchInput();

    fireEvent.change(searchInput, { target: { value: "username" } });
    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(navigate).toHaveBeenCalledWith("/profile/username");
  });

  it("should focus input on render", () => {
    render(<Header />);

    expect(getSearchInput()).toHaveFocus();
  });

  it("should redirect by home, when click in logo Search d_evs", () => {
    render(<Header />);

    fireEvent.click(getLogo());

    expect(navigate).toHaveBeenCalledWith("/home");
  });
});
