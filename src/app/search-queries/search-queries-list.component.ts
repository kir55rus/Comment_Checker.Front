import {Component, Input, OnInit} from '@angular/core';
import {SearchQuery} from '../search-query';
import {Group} from '../group';
import {SearchQueriesService} from '../services/search-queries.service';
import {max} from 'rxjs/operator/max';
@Component({
  selector: 'search-queries-list',
  templateUrl: './search-queries-list.component.html',
})
export class SearchQueriesListComponent implements OnInit {
  @Input()
  groups: Group[];

  searchQueries: SearchQuery[];
  queriesError: Error[];

  totalCount: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  pages: Array<number>;

  errors: Error[];

  constructor(private queriesService: SearchQueriesService) {}

  ngOnInit(): void {
    this.showQueries();
  }

  deleteQuery(query: SearchQuery): void {
    if (!confirm('Уверены, что хотите удалить запрос?')) {
      return;
    }

    this.queriesService.delSearchQuery(query)
      .then(res => {
        this.searchQueries = this.searchQueries.filter(e => e.id !== query.id);
      })
      .catch(error => this.errors = error);
  }

  showQueries(group?: Group, page?: number): void {
    this.queriesService.getSearchQueries(group, page)
      .then(data => {
        console.log(data);
        this.searchQueries = data.result;
        this.totalCount = data.totalCount;
        this.totalPages = data.totalPages;
        this.pageSize = data.pageSize;
        this.currentPage = data.currentPage;

        this.pages = [];
        const min = Math.max(1, this.currentPage - 5);
        const max = Math.min(this.totalPages, this.currentPage + 5);
        for (let i = min; i <= max; ++i) {
          this.pages.push(i);
        }
      })
      .catch(error => this.queriesError = error);
  }

  gotoSearhQuery(query: SearchQuery): void {
    //todo
  }
}

