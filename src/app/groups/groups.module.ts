import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupsComponent} from "./groups.component";
import {GroupsService} from "../services/groups.service";
import {BrowserModule} from "@angular/platform-browser";
import {GroupsListComponent} from "./groups-list.component";
import {CreateGroupComponent} from "./create-group.component";
import {FormsModule} from "@angular/forms";

const groupsRoutes: Routes = [
  {
    path: 'groups',
    component: GroupsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(groupsRoutes),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GroupsComponent,
    GroupsListComponent,
    CreateGroupComponent
  ],
  providers: [
    GroupsService
  ]
})
export class GroupsModule {}
