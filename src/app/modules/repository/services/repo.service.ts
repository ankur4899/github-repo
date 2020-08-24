import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  GITHUB_URL = 'https://api.github.com';
  favouriteRepo = [];
  constructor(private http: HttpClient) { }

  /**
   * Get list of public repository from github
   */
  getAllPublicRepos(): Observable<any> {
    return this.http.get(`${this.GITHUB_URL}/repositories`);
  }

  /**
   * Get list of contributors for repo
   * @param owner // Owner of repo
   * @param repoName  // Name of repo
   */
  getContributorsOfRepo(owner, repoName): Observable<any> {
    return this.http.get(`${this.GITHUB_URL}/repos/${owner}/${repoName}/contributors`);
  }

  /**
   * Get details of a repo
   * @param owner // Owner of repo
   * @param repoName  // Name of repo
   */
  getRepoDetails(owner, repoName): Observable<any> {
    return this.http.get(`${this.GITHUB_URL}/repos/${owner}/${repoName}`);
  }

  setFavouriteRepo(repo): void {
    this.favouriteRepo.push(repo);
  }

  getFavouriteRepo(): Array<any> {
    return this.favouriteRepo;
  }

}
