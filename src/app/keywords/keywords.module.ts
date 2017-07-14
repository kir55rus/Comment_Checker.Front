import {NgModule} from '@angular/core';
import {KeywordsListComponent} from './list/keywords-list.component';
import {KeywordsRoutingModule} from './keywords-routing.module';
import {KeywordsComponent} from "./keywords.component";
@NgModule({
  imports: [
    KeywordsRoutingModule
  ],
  declarations: [
    KeywordsComponent,
    KeywordsListComponent
  ]
})
export class KeywordsModule {}
