import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./not-found.component";
import {SearchQueriesModule} from "./search-queries/search-queries.module";
import {AppRoutingModule} from "./app-routing.module";
import {GroupsModule} from "./groups/groups.module";
import {HttpModule} from "@angular/http";
import {SettingsModule} from "./settings/settings.module";
import {ErrorModule} from "./error/error.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SearchQueriesModule,
    GroupsModule,
    SettingsModule,
    AppRoutingModule,
    HttpModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
