import { render, screen } from "@testing-library/react";

import Alert from "../../../components/alert";

describe("<Alert />", () => {
  it("should render the message correctly", () => {
    const message = "Esta é uma mensagem de teste";

    render(<Alert message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should have the correct CSS class", () => {
    const message = "Outra mensagem de teste";
    render(<Alert message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert");
  });
});
