import {BaseService} from "./base.service";
import {SearchQuery} from "../search-query";

export class SearchQueriesService extends BaseService {
  private url: string = this.baseUrl + '/search-queries';

  getSearchQueries(): Promise<SearchQuery[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
