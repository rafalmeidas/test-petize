import { render, screen } from "@testing-library/react";

import Loader from "../../../components/loader";

describe("<Loader />", () => {
  it("should render the Loader component", () => {
    render(<Loader />);
    const loaderOverlay = screen.getByTestId("loader-overlay");
    const loaderContainer = screen.getByTestId("loader-container");
    const spinner = screen.getByTestId("spinner");

    expect(loaderOverlay).toBeInTheDocument();
    expect(loaderContainer).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });

  it("should must have the correct css classes", () => {
    render(<Loader />);
    const loaderOverlay = screen.getByTestId("loader-overlay");
    const loaderContainer = screen.getByTestId("loader-container");
    const spinner = screen.getByTestId("spinner");

    expect(loaderOverlay).toHaveClass("loaderOverlay");
    expect(loaderContainer).toHaveClass("loaderContainer");
    expect(spinner).toHaveClass("spinner");
  });
});
