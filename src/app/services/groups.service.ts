import {Injectable, OnInit} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Group} from "../group";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';
import {BaseService} from "./base.service";

@Injectable()
export class GroupsService extends BaseService implements OnInit {
  private url: string;

  ngOnInit(): void {
    this.url = this.baseUrl + '/groups';
  }

  getGroups(): Promise<Group[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  createGroup(name: string): Promise<Group> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, {name: name}, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteGroup(id: number): Promise<void> {
    return this.http.delete(this.url + '/' +  id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
