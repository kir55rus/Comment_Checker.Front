import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  template: 'Error: <h1>{{error}}</h1>'
})
export class ErrorComponent {
  error: string = 'Trrrr';

  constructor(private router: Router) {}
}
