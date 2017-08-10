import {Component, OnInit} from "@angular/core";
import {SearchQuery} from "../search-query";
import {SearchQueriesService} from "../services/search-queries.service";
import {Title} from "@angular/platform-browser";
import {Group} from "../group";
import {GroupsService} from "../services/groups.service";
@Component({
  templateUrl: './search-queries.component.html',
})
export class SearchQueriesComponent implements OnInit{
  searchQueries: SearchQuery[];
  groups: Group[];
  queriesError: Error[];
  groupsError: Error[];

  constructor(private queriesService: SearchQueriesService,
              private titleService: Title,
              private groupService: GroupsService) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Ключевые слова');

    this.queriesService.getSearchQueries()
      .then(data => this.searchQueries = data)
      .catch(error => this.queriesError = error);

    this.groupService.getGroups()
      .then(data => this.groups = data)
      .catch(error => this.groupsError = error);
  }
}
