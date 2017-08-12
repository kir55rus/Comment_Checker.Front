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
  groupsChange = new EventEmitter<Group[]>();

  errors: Error[];

  constructor(private groupsService: GroupsService) {}

  onDelete(group: Group): void {
    if(!confirm('Уверены? Все ссылки и ключевые слова будут удалены')) {
      return;
    }

    this.groupsService.deleteGroup(group.id)
      .then(res => {
        this.groupsChange.emit(this.groups.filter(g => g.id != group.id));
      })
      .catch(error => this.errors = error);
  }
}
