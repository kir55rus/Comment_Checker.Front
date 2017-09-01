import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import {PageableResult} from '../pageable-result';

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
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.baseRequestOptions = new RequestOptions({ headers: headers });
  }

  protected extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  protected extractPageableData(res: Response): PageableResult<any> {
    const totalCount = +res.headers.get('X-Total-Count');
    const totalPages = +res.headers.get('X-Total-Pages');
    const pageSize = +res.headers.get('X-Page-Size');
    const currentPage = +res.headers.get('X-Current-Page');

    const body = res.json();
    return {
      result: body,
      totalCount: totalCount,
      totalPages: totalPages,
      pageSize: pageSize,
      currentPage: currentPage
    };
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
