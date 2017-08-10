import {NgModule} from "@angular/core";
import {SettingsComponent} from "./settings.component";
import {Route, RouterModule} from "@angular/router";
import {SettingsService} from "../services/settings.service";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ErrorComponent} from "../error/error.component";
import {ErrorModule} from "../error/error.module";

const settingsRoutes: Route[] = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes),
    ReactiveFormsModule,
    BrowserModule,
    ErrorModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule {

}
