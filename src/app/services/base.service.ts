import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class BaseService {
  protected baseUrl: string = environment.apiUrl;
  protected baseRequestOptions: RequestOptions;

  constructor(
    protected http: Http
  ) {
    this.init();
  }

  private init(): void {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.baseRequestOptions = new RequestOptions({ headers: headers });
  }

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
