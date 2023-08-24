import { render, screen } from "@testing-library/react";
import Router from "react-router-dom";

import Main from "../../../templates/main";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("<Main />", () => {
  const spyPathname = (pathname: string) =>
    jest.spyOn(Router, "useLocation").mockReturnValue({
      pathname,
      state: {},
      key: "",
      hash: "",
      search: "",
    });

  beforeEach(() => {
    jest.spyOn(Router, "useNavigate").mockImplementation(() => jest.fn());

    spyPathname("/profile");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getHeader = () => screen.queryByTestId(/header/i);

  it("should render Header component when pathname is not / or /home", () => {
    render(<Main />);

    expect(getHeader()).toBeInTheDocument();
  });

  it("should not render Header component when pathname is /", () => {
    spyPathname("/");

    render(<Main />);

    expect(getHeader()).not.toBeInTheDocument();
  });

  it("should not render Header component when pathname is /home", () => {
    spyPathname("/home");

    render(<Main />);

    expect(getHeader()).not.toBeInTheDocument();
  });

  // it("should render Outlet component in main", () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={["/profile"]}>
  //       <Routes>
  //         <Route path="/profile" element={<Main />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   const outletComponent = container.querySelector("main > div");
  //   expect(outletComponent).toBeInTheDocument();
  // });

  // Add more test cases as needed...
});
