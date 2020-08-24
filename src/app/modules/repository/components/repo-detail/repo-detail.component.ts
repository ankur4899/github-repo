import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  contributorList = [];
  repoData;

  constructor(
    private activateRoute: ActivatedRoute,
    private repoService: RepoService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((routeData) => {
      if (routeData) {
        this.getRepoDetails(routeData);
        this.getContributorsList(routeData);
      }
    });
  }

  /**
   * Get List of Contributors of a repository
   * @param routeData //Data from route params
   */
  getContributorsList(routeData): void {
    this.repoService.getContributorsOfRepo(routeData.owner, routeData.repo).subscribe((data) => {
      this.contributorList = data;
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Get Repository Details
   * @param routeData //Data from route params
   */
  getRepoDetails(routeData): void {
    this.repoService.getRepoDetails(routeData.owner, routeData.repo).subscribe((data) => {
      this.repoData = data;
    }, (err) => {
      console.log(err);
    });
  }

}
