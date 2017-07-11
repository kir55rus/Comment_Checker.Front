import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import {ErrorComponent} from "./error.component";

const appRoutes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    outlet: 'error'
  },
  {
    path: '',
    redirectTo: '/keywords',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
