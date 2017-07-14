import {RouterModule, Routes} from '@angular/router';
import {KeywordsListComponent} from './list/keywords-list.component';
import {NgModule} from '@angular/core';

const keywordsRoutes: Routes = [
  {
    path: 'keywords',
    component: KeywordsListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(keywordsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class KeywordsRoutingModule { }
