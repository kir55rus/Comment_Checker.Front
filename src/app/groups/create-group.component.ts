import {Component, EventEmitter, Output} from "@angular/core";
import {Group} from "../group";
import {Http} from "@angular/http";
import {GroupsService} from "../services/groups.service";
@Component({
  selector: 'create-group',
  templateUrl: './create-group.component.html'
})
export class CreateGroupComponent {
  @Output()
  groupCreated = new EventEmitter<Group>();
  groupName: string;

  constructor(private groupsService: GroupsService) {}

  onSubmit(): void {
    this.groupsService.createGroup(this.groupName)
      .then(group => {
        this.groupCreated.next(group);
        this.groupName = null;
      })
      .catch(error => console.log(error));
  }
}
