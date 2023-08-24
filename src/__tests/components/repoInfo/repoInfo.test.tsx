import { render, screen } from "@testing-library/react";

import RepoInfo from "../../../components/repoInfo";

import { Repo } from "../../../models/repo";

const MOCK_REPO: Repo = {
  name: "test-repo",
  description: "A test repository",
  html_url: "https://github.com/test-user/test-repo",
  stargazers_count: 42,
  updated_at: "2023-08-24T12:00:00Z",
};

describe("<RepoInfo />", () => {
  it("should render repository information correctly", () => {
    render(<RepoInfo repo={MOCK_REPO} />);

    const repoName = screen.getByText("test-repo");
    const description = screen.getByText("A test repository");
    const stargazers = screen.getByText("42");

    expect(repoName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(stargazers).toBeInTheDocument();
  });

  it("should have the correct link to the repository", () => {
    render(<RepoInfo repo={MOCK_REPO} />);
    const repoLink = screen.getByRole("link");
    expect(repoLink).toHaveAttribute(
      "href",
      "https://github.com/test-user/test-repo"
    );
  });
});
