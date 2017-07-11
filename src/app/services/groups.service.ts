import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Group} from "../group";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GroupsService {
  private url = '/rest/groups';

  constructor(private httpService: Http) {
  }

  getGroups(): Promise<Group[]> {
    return this.httpService.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  createGroup(name: string): Promise<Group> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.httpService.post(this.url, {name: name}, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteGroup(id: number): Promise<void> {
    return this.httpService.delete(this.url + '/' +  id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    return Promise.reject(new Error(error.statusText || error.toString()));
  }
}
