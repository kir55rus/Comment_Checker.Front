import {Group} from "./group";

export class SearchQuery {
  public id: number;
  public searchQuery: string;
  public frequency: number;
  public yandexChecked: boolean;
  public googleChecked: boolean;
  public group: Group;
}
