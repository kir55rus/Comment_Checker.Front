import {BaseService} from "./base.service";
import {SearchQuery} from "../search-query";

import 'rxjs/add/operator/toPromise';
import {Group} from "../group";
import {PageableResult} from "../pageable-result";

export class SearchQueriesService extends BaseService {
  private url: string = this.baseUrl + '/search-queries';

  getSearchQueries(group?: Group, page?: number): Promise<PageableResult<SearchQuery[]>> {
    let url = this.url;
    if (group) {
      url += '/group/' + group.id;
    }
    if (page) {
      url += '?page=' + page;
    }

    return this.http.get(url)
      .toPromise()
      .then(this.extractPageableData)
      .catch(this.handleError);
  }

  addSearchQuery(query: SearchQuery): Promise<SearchQuery> {
    let body = JSON.stringify(query);
    return this.http.post(this.url, body,this.baseRequestOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  delSearchQuery(query: SearchQuery): Promise<void> {
    return this.http.delete(this.url + '/' +  query.id)
      .toPromise()
      .then(e => {return; })
      .catch(this.handleError);
  }
}
