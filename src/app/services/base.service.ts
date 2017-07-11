import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class BaseService {
  protected baseUrl = '/rest';

  constructor(
    protected http: Http
  ) {}

  protected extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  protected handleError(error: any) {
    return Promise.reject(new Error(error.statusText || error.toString()));
  }
}
