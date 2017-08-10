import {AfterViewInit, Component, Input, OnInit, TemplateRef} from "@angular/core";

@Component({
  selector: 'error-alert',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input()
  title: string = 'Ошибка';

  @Input()
  errors: Error[];
}
