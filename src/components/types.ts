// https://docs.github.com/en/rest/reference/users

export interface I_User {
  login: string;
  id: 1;

  avatar_url: string;
  url: string;
  organizations_url: 'https://api.github.com/users/mojombo/orgs';
  name: 'Tom Preston-Werner';
  company: '@chatterbugapp, @redwoodjs, @preston-werner-ventures ';
  location: 'San Francisco';

  followers: 24283;
  following: 11;
  created_at: '2007-10-20T05:24:19Z';
  updated_at: '2025-07-01T12:37:42Z';
  public_repos: number;
  public_gists: number;
}
