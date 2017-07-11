import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Group} from "../group";
import {Router} from "@angular/router";
import {GroupsService} from "../services/groups.service";
@Component({
  selector: 'groups-list',
  templateUrl: './groups-list.component.html'
})
export class GroupsListComponent {
  @Input()
  groups: Group[];

  @Output()
  groupDeleted = new EventEmitter<number>();

  constructor(private groupsService: GroupsService) {}

  onDelete(id: number): void {
    if(!confirm('Уверены? Все ссылки и ключевые слова будут удалены')) {
      return;
    }

    this.groupsService.deleteGroup(id)
      .then(res => this.groupDeleted.next(id))
      .catch(error => console.log(error)); //todo: replace
  }
}
