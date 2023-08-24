import adapter from "../__mocker/setupMockAdapter";

import { getRepos, getUser } from "../../services/usersService";

import { User } from "../../models/user";
import { Repo } from "../../models/repo";

import { AuthenticationServiceMocker } from "../__mocker/userServiceMocker";

const USERNAME = "testuser";

const RESULT_API_1: User = {
  id: 1,
  avatar_url: "https://example.com/avatar.jpg",
  name: "Test User",
  login: USERNAME,
  bio: "Software developer",
  followers: 100,
  following: 50,
  company: "Example Inc.",
  location: "City, Country",
  email: "test@example.com",
  blog: "https://testuser.com",
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

describe("Services", () => {
  beforeEach(() => {
    AuthenticationServiceMocker.getUser(USERNAME).reply(200, RESULT_API_1);
    AuthenticationServiceMocker.getRepos(USERNAME).reply(200, RESULT_API_2);
  });

  afterAll(() => {
    adapter.restore();
  });

  it("should fetch user data correctly", async () => {
    const response = await getUser(USERNAME);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(RESULT_API_1);
  });

  it("should fetch user repositories correctly", async () => {
    const response = await getRepos(USERNAME);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(RESULT_API_2);
  });
});
