import { render, screen } from "@testing-library/react";

import { User } from "../../../models/user";

import UserInfo from "../../../components/userInfo";

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

describe("<UserInfo />", () => {
  it("should render user information correctly", () => {
    render(<UserInfo user={MOCK_USER} />);

    const avatarImage = screen.getByAltText("Test User");
    const name = screen.getByText("Test User");
    const login = screen.getByText("@testuser");
    const bio = screen.getByText("Software developer");
    const followers = screen.getByText("100 seguidores");
    const following = screen.getByText("50 seguindo");
    const company = screen.getByText("Example Inc.");
    const location = screen.getByText("City, Country");
    const email = screen.getByText("test@example.com");
    const blog = screen.getByRole("link", { name: "https://testuser.com" });
    const twitter = screen.getByRole("link", { name: "testuser" });

    expect(avatarImage).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
  });

  it("should render links with correct href", () => {
    render(<UserInfo user={MOCK_USER} />);
    const blogLink = screen.getByRole("link", { name: "https://testuser.com" });
    const twitterLink = screen.getByRole("link", { name: "testuser" });

    expect(blogLink).toHaveAttribute("href", "https://testuser.com");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/testuser");
  });
});
