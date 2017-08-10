import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Group} from "../group";
import {GroupsService} from "../services/groups.service";
import {Router} from "@angular/router";
@Component({
  templateUrl: './groups.component.html'
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  errors: Error[];

  constructor(
    private titleService: Title,
    private groupsService: GroupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Группы');


    this.groupsService.getGroups()
      .then(groups => this.groups = groups)
      .catch(error => {
        this.errors = error;
    });
  }

}
