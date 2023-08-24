import { render, screen } from "@testing-library/react";

import Paragraph from "../../../components/paragraph";

describe("<Paragraph />", () => {
  it("should render the paragraph element", () => {
    render(<Paragraph>Some text</Paragraph>);
    const paragraphElement = screen.getByText("Some text");
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should have the correct CSS class", () => {
    render(<Paragraph>Some text</Paragraph>);
    const paragraphElement = screen.getByText("Some text");
    expect(paragraphElement).toHaveClass("paragraph");
  });

  it("should pass the attributes correctly", () => {
    render(<Paragraph id="test-paragraph">Some text</Paragraph>);
    const paragraphElement = screen.getByText("Some text");
    expect(paragraphElement).toHaveAttribute("id", "test-paragraph");
  });
});
