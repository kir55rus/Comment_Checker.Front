import {BaseService} from "./base.service";
import {SearchQuery} from "../search-query";

import 'rxjs/add/operator/toPromise';

export class SearchQueriesService extends BaseService {
  private url: string = this.baseUrl + '/search-queries';

  getSearchQueries(): Promise<SearchQuery[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  addSearchQuery(query: SearchQuery): Promise<SearchQuery> {
    let body = JSON.stringify(query);
    return this.http.post(this.url, body,this.baseRequestOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
