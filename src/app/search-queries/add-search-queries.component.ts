import {Component, Input} from "@angular/core";
import {SearchQuery} from "../search-query";
import {Group} from "../group";
import {SearchQueriesService} from "../services/search-queries.service";

@Component({
  selector: 'add-search-queries',
  templateUrl: './add-search-queries.component.html'
})
export class AddSearchQueriesComponent {
  @Input()
  groups: Group[];
  status: string;
  errors: Error[];

  searchQueryModel = new SearchQuery();

  constructor(private queriesService: SearchQueriesService) {}

  onSubmitSingle(): void {
    this.queriesService.addSearchQuery(this.searchQueryModel)
      .then(data => {
        status = 'Добавлено: "' + data.searchQuery + '"';
        this.errors = null;
      })
      .catch(error => {
        this.errors = error;
        this.status = '';
      });
  }
}
