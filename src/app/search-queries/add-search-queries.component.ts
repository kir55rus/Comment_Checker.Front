import {Component, Input, OnChanges} from "@angular/core";
import {SearchQuery} from "../search-query";
import {Group} from "../group";
import {SearchQueriesService} from "../services/search-queries.service";

@Component({
  selector: 'add-search-queries',
  templateUrl: './add-search-queries.component.html'
})
export class AddSearchQueriesComponent {
  groups: Group[];

  searchQuery = new SearchQuery();

  constructor(private queriesService: SearchQueriesService) {}


}
