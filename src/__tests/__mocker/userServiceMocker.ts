import adapter from "./setupMockAdapter";

import { userUrl } from "../../services/usersService";

export class AuthenticationServiceMocker {
  static getUser(username: string) {
    return adapter.onGet(`${userUrl}/${username}`);
  }

  static getRepos(username: string) {
    return adapter.onGet(`${userUrl}/${username}/repos`);
  }
}
