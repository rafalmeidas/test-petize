import { AxiosResponse } from "axios";

import axios from "./api";

import { Repo } from "../models/repo";
import { User } from "../models/user";

export const userUrl = "/users";

export function getUser(username: string): Promise<AxiosResponse<User, any>> {
  return axios.get(`${userUrl}/${username}`);
}

export function getRepos(
  username: string
): Promise<AxiosResponse<Repo[], any>> {
  return axios.get(`${userUrl}/${username}/repos`);
}
