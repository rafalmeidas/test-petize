import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactButton from "../../../components/contactButton";

import { User } from "../../../models/user";

const MOCK_USER: User = {
  id: 1,
  avatar_url: "https://example.com/avatar.jpg",
  name: "Test User",
  login: "testuser",
  bio: "Software developer",
  followers: 100,
  following: 50,
  company: "Example Inc.",
  location: "City, Country",
  email: "test@example.com",
  blog: "https://testuser.com",
  twitter_username: "testuser",
};

const MOCK_USER_WITHOUT_TWITTER: User = {
  id: 1,
  avatar_url: "https://example.com/avatar.jpg",
  name: "Test User",
  login: "testuser",
  bio: "Software developer",
  followers: 100,
  following: 50,
};

describe("<ContactButton />", () => {
  it("should render the 'Contato' button when a Twitter username is provided", () => {
    render(<ContactButton user={MOCK_USER} />);

    const contatoButton = screen.getByText("Contato");
    expect(contatoButton).toBeInTheDocument();
  });

  it("should not render the 'Contato' button when no Twitter username is provided", () => {
    render(<ContactButton user={MOCK_USER_WITHOUT_TWITTER} />);

    const contatoButton = screen.queryByText("Contato");
    expect(contatoButton).not.toBeInTheDocument();
  });

  it("should open the Twitter profile in a new tab when 'Contato' button is clicked", () => {
    render(<ContactButton user={MOCK_USER} />);

    const contatoButton = screen.getByText("Contato");
    userEvent.click(contatoButton);

    const twitterProfileLink = screen.getByRole("link", { name: "Contato" });
    expect(twitterProfileLink).toHaveAttribute(
      "href",
      `https://twitter.com/${MOCK_USER.twitter_username}`
    );
    expect(twitterProfileLink).toHaveAttribute("target", "_blank");
  });
});
