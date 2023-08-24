/* eslint-disable testing-library/no-wait-for-side-effects */
import { render, waitFor, screen } from "@testing-library/react";
import Router from "react-router-dom";

import Profile from "../../../pages/profile";

import { User } from "../../../models/user";
import { Repo } from "../../../models/repo";

import { AuthenticationServiceMocker } from "../../__mocker/userServiceMocker";

const USERNAME = "rafalmeidas";

const RESULT_API_1: User = {
  id: 1,
  avatar_url: "https://example.com/avatar.jpg",
  name: "Rafael Silva",
  login: USERNAME,
  bio: "Software developer",
  followers: 100,
  following: 50,
  company: "Example Inc.",
  location: "City, Country",
  email: "test@example.com",
  blog: "https://rafalmeidas.com",
  twitter_username: USERNAME,
};

const REPO_1: Repo = {
  name: "test-repo",
  description: "A test repository",
  html_url: `https://github.com/${USERNAME}/test-repo`,
  stargazers_count: 42,
  updated_at: "2023-08-24T12:00:00Z",
};

const REPO_2: Repo = {
  name: "my-repo",
  description: "A my repository",
  html_url: `https://github.com/${USERNAME}/my-repo`,
  stargazers_count: 42,
  updated_at: "2023-08-24T12:00:00Z",
};

const RESULT_API_2 = [REPO_1, REPO_2];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Profile />", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    AuthenticationServiceMocker.getUser(USERNAME).reply(200, RESULT_API_1);
    AuthenticationServiceMocker.getRepos(USERNAME).reply(200, RESULT_API_2);

    jest.spyOn(Router, "useParams").mockReturnValue({ username: USERNAME });
    jest.spyOn(Router, "useNavigate").mockImplementation(() => navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderedUser = () => {
    const avatarImage = screen.getByAltText("Rafael Silva");
    const name = screen.getByText("Rafael Silva");
    const login = screen.getByText("@rafalmeidas");
    const bio = screen.getByText("Software developer");
    const followers = screen.getByText("100 seguidores");
    const following = screen.getByText("50 seguindo");
    const company = screen.getByText("Example Inc.");
    const location = screen.getByText("City, Country");
    const email = screen.getByText("test@example.com");
    const blog = screen.getByRole("link", { name: "https://rafalmeidas.com" });
    const twitter = screen.getByRole("link", { name: "rafalmeidas" });

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
  };

  it("should display user profile and repos", async () => {
    render(<Profile />);

    expect(await screen.findByTestId("loader-overlay")).toBeVisible();

    await waitFor(() => {
      renderedUser();
    });

    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(screen.getByText("my-repo")).toBeInTheDocument();
  });

  it("should display an alert when user doesn't exist", async () => {
    AuthenticationServiceMocker.getUser(USERNAME).reply(404, RESULT_API_1);

    render(<Profile />);

    expect(await screen.findByTestId("loader-overlay")).toBeVisible();

    await waitFor(() => {
      expect(
        screen.getByText(
          "Usuário pesquisado não existe. Você pode pesquisar outro usuário 😄."
        )
      ).toBeInTheDocument();
    });
  });

  it("should display an alert when no repos are available", async () => {
    AuthenticationServiceMocker.getRepos(USERNAME).reply(200, []);

    render(<Profile />);

    expect(await screen.findByTestId("loader-overlay")).toBeVisible();

    await waitFor(() => {
      expect(
        screen.getByText("Não existem repositórios disponíveis para exibição.")
      ).toBeInTheDocument();
    });
  });
});
