import { render, screen } from "@testing-library/react";

import { IconLabel } from "../../../components/iconLabel";

describe("<IconLabel />", () => {
  it("should render icon and value", () => {
    render(<IconLabel icon="📌" value="42" />);
    const iconValue = screen.getByText("📌 42");

    expect(iconValue).toBeInTheDocument();
  });

  it("should render icon, value, and label", () => {
    render(<IconLabel icon="📌" value="42" label="Answer" />);

    const iconValue = screen.getByText(/📌 42/i);
    const label = screen.getByText(/answer/i);

    expect(iconValue).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("should render link when isLink is true", () => {
    render(
      <IconLabel
        icon={<span>📌</span>}
        value="example.com"
        isLink
        preValue="https://"
      />
    );
    const link = screen.getByRole("link");
    const icon = screen.getByText("📌");
    const value = screen.getByText("example.com");
    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("should render preValue link when isLink is true and preValue is provided", () => {
    render(
      <IconLabel
        icon={<span>📌</span>}
        value="post/42"
        isLink
        preValue="https://example.com"
      />
    );
    const link = screen.getByRole("link");
    const icon = screen.getByText("📌");
    const value = screen.getByText("post/42");
    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com/post/42");
  });

  it("should not render anything if value is falsy", () => {
    render(<IconLabel icon={<span>📌</span>} />);
    expect(screen.queryByText("📌")).not.toBeInTheDocument();
  });
});
