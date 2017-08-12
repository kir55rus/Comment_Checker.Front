import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {SearchQuery} from "../search-query";
import {Group} from "../group";
import {isUndefined} from "util";
import {SearchQueriesService} from "../services/search-queries.service";
@Component({
  selector: 'search-queries-list',
  templateUrl: './search-queries-list.component.html',
})
export class SearchQueriesListComponent implements OnInit {
  @Input()
  groups: Group[];

  searchQueries: SearchQuery[];
  queriesError: Error[];

  errors: Error[];

  constructor(private queriesService: SearchQueriesService) {}

  ngOnInit(): void {
    this.queriesService.getSearchQueries()
      .then(data => this.searchQueries = data)
      .catch(error => this.queriesError = error);
  }

  deleteQuery(query: SearchQuery): void {
    //todo
  }

  showQueriesForGroup(group: Group): void {
    console.log(group);
    //todo
  }

  gotoSearhQuery(query: SearchQuery): void {
    //todo
  }
}

