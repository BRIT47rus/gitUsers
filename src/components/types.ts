// https://docs.github.com/en/rest/reference/users

export interface I_User {
  login: string;
  id: 1;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  user_view_type?: string;
  site_admin?: boolean;
}
