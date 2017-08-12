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
  groups: Group[];
  groupsError: Error[];

  constructor(private queriesService: SearchQueriesService,
              private titleService: Title,
              private groupService: GroupsService) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Ключевые слова');

    this.groupService.getGroups()
      .then(data => this.groups = data)
      .catch(error => this.groupsError = error);
  }
}
