import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class BaseService {
  protected baseUrl: string = '/rest';

  constructor(
    protected http: Http
  ) {}

  protected extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  protected handleError(errors: Response) {
    console.error(errors);
    let error;
    try {
      error = errors.json().errors;
    } catch (e) {
      error = [{message: 'Внутренняя ошибка сервера'}];
    }
    return Promise.reject(error);
  }
}
