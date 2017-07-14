import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "./not-found.component";
import {KeywordsModule} from "./keywords/keywords.module";
import {AppRoutingModule} from "./app-routing.module";
import {GroupsModule} from "./groups/groups.module";
import {HttpModule} from "@angular/http";
import {ErrorComponent} from "./error.component";
import {FormsModule} from "@angular/forms";
import {SettingsModule} from "./settings/settings.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    KeywordsModule,
    GroupsModule,
    SettingsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
