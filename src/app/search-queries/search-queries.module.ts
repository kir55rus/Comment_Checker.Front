import {NgModule} from '@angular/core';
import {SearchQueriesListComponent} from './search-queries-list.component';
import {SearchQueriesComponent} from "./search-queries.component";
import {RouterModule, Routes} from "@angular/router";
import {AddSearchQueriesComponent} from "./add-search-queries.component";
import {ErrorModule} from "../error/error.module";
import {SearchQueriesService} from "../services/search-queries.service";
import {BrowserModule} from "@angular/platform-browser";
import {GroupsService} from "../services/groups.service";
import {FormsModule} from "@angular/forms";

const searchQueriesRoutes: Routes = [
  {
    path: 'keywords',
    component: SearchQueriesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchQueriesRoutes),
    ErrorModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    SearchQueriesComponent,
    SearchQueriesListComponent,
    AddSearchQueriesComponent
  ],
  providers: [
    SearchQueriesService,
    GroupsService
  ]
})
export class SearchQueriesModule {}
