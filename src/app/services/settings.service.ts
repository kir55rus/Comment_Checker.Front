import {Injectable, OnInit} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Settings} from "../settings";
import {BaseService} from "./base.service";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SettingsService extends BaseService {
  private url: string = this.baseUrl + '/settings';

  getSettings(): Promise<Settings[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  updateSettings(settings: Settings): Promise<Settings> {
    return this.http.put(this.url + '/' + settings.id, settings, this.baseRequestOptions)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
