import { Octokit } from 'octokit';

export const url = 'https://api.github.com/users/';
export const octokit = new Octokit({});
octokit.request('GET');
