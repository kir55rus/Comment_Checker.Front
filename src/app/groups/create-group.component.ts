import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Group} from "../group";
import {Http} from "@angular/http";
import {GroupsService} from "../services/groups.service";
@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html'
})
export class CreateGroupComponent {
  @Input()
  groups: Group[];

  @Output()
  groupsChange = new EventEmitter<Group[]>();

  groupName: string;
  errors: Error[];

  constructor(private groupsService: GroupsService) {}

  onSubmit(): void {
    this.groupsService.createGroup(this.groupName.trim())
      .then(group => {
        this.groups.push(group);
        this.groupsChange.emit(this.groups);
        this.groupName = null;
      })
      .catch(error => this.errors = error);
  }
}
