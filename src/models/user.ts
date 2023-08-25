export interface User {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
}
