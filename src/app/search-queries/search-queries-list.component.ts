import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {SearchQuery} from "../search-query";
import {Group} from "../group";
import {isUndefined} from "util";
@Component({
  selector: 'search-queries-list',
  templateUrl: './search-queries-list.component.html',
})
export class SearchQueriesListComponent implements OnChanges{
  @Input()
  searchQueries: SearchQuery[];
  @Input('groups')
  groupsList: Group[] = [];

  @Output()
  searchQueriesChange = new EventEmitter<SearchQuery[]>();

  groups: Map<number, Group> = new Map<number, Group>();
  errors: Error[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.groupsList == null) {
      return;
    }
    for(let group of this.groupsList) {
      this.groups[group.id] = group;
    }
  }

  deleteQuery(id: number): void {
    //todo
  }

  showQueriesForGroup(id: number): void {
    //todo
  }

  gotoSearhQuery(id: number): void {
    //todo
  }
}

