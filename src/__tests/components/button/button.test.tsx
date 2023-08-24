import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../../../components/button";

describe("<Button />", () => {
  it("should render the button correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should pass the attributes correctly", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByText("Submit")).toHaveAttribute("type", "submit");
  });

  it("should call the callback function", () => {
    const onClick = jest.fn();

    render(
      <Button type="button" onClick={onClick}>
        Callback
      </Button>
    );

    const button = screen.getByText("Callback");
    expect(button).toHaveAttribute("type", "button");

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
