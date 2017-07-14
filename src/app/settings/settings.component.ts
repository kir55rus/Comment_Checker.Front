import {Component, OnInit} from "@angular/core";
import {SettingsService} from "../services/settings.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Settings} from "../settings";

@Component({
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  formErrors = {
    'depth': '',
    'weight': '',
    'email': '',
    'password': '',
    'percent': '',
    'period': '',
  };
  validationMessages = {
    'depth': {
      'min': 'Не может быть меньше 1',
      'max': 'Не может быть больше 50'
    },
    'weight': {
      'badValue': 'Значения должны быть больше 0',
      'badFormat': 'Неверный формат. Необходим массив в формате JSON',
      'needArray': 'Необходим массив',
      'emptyArray': 'Массив не может быть пустым',
    },
    'email': {
      'pattern': 'Неверный формат',
    },
    'password': {
    },
    'percent': {
      'min': 'Не может быть меньше 1',
      'max': 'Не может быть больше 100',
    },
    'period': {
      'min': 'Не может быть меньше 10',
    }
  };

  data = {
    'depth': null,
    'weight': null,
    'email': null,
    'password': null,
    'percent': null,
    'period': null,
  };

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.settingsService.getSettings()
      .then(settings => {
        for(let val of settings) {
          this.data[val.name] = val;

          if(val.name == "password") {
            this.data[val.name].value = "";
          }
        }

        this.buildForm();
      })
      .catch(error => console.log(error));
  }

  onSubmit(): void {
    for(let field in this.data) {
      if(this.data[field].value == this.settingsForm.value[field]) {
        continue;
      }

      let oldValue = this.data[field].value;
      this.data[field].value = this.settingsForm.value[field];
      this.settingsService.updateSettings(this.data[field])
        .then(value => {
          this.data[field] = value;
          if(value.name == "password") {
            this.data[field].value = "";
          }
          this.settingsForm.controls[field].setValue(this.data[field].value);
        })
        .catch(error => {
          this.data[field].value = oldValue;
          console.log(error)
        });
    }
  }

  private buildForm(): void {
    this.settingsForm = this.formBuilder.group({
      'depth': [
        this.data.depth.value,
        [
          Validators.min(1),
          Validators.max(50),
        ]
      ],
      'weight': [
        this.data.weight.value,
        [
          (control: AbstractControl): {[key: string]: any} => {
            let data;
            try {
              data = JSON.parse(control.value);
            } catch (e) {
              return {'badFormat': null};
            }

            if(data === null) {
              return null;
            }

            if(!(data instanceof Array)) {
              return {'needArray': null};
            }

            if(data.length == 0) {
              return {'emptyArray': null};
            }

            for(let val of data) {
              if(val != +val ||  +val < 0) {
                return {'badValue': {'value': val}};
              }
            }
            return null;
          }
        ]
      ],
      'email': [
        this.data.email.value,
        [
          Validators.pattern('^.+@.+\..+$')
        ]
      ],
      'password': [
        this.data.password.value,
      ],
      'percent': [
        this.data.percent.value,
        [
          Validators.min(1),
          Validators.max(100),
        ]
      ],
      'period': [
        this.data.period.value,
        [
          Validators.min(10),
        ]
      ]
    });

    this.settingsForm.valueChanges
      .subscribe(data => this.onValueChanged());

    this.onValueChanged();
  }

  private onValueChanged() {
    if (!this.settingsForm) {
      return;
    }
    const form = this.settingsForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
