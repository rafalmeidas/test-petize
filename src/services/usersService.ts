import { AxiosResponse } from "axios";
import { api } from "./api";
import { Repo } from "../models/repo";
import { User } from "../models/user";

const url = "/users";

export function getUser(username: string): Promise<AxiosResponse<User, any>> {
  return api.get(`${url}/${username}`);
}

export function getRepos(
  username: string
): Promise<AxiosResponse<Repo[], any>> {
  return api.get(`${url}/${username}/repos`);
}
