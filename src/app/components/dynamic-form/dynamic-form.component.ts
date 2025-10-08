import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FieldSchema,
  FormSchema,
} from '../../interfaces/dynamic-form.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  @Input() schema!: FormSchema;
  @Output() formData = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.schema) {
      this.buildForm();
    }
  }

  buildForm() {
    let group: any = {};

    this.schema.fields.forEach((field) => {
      let value: any = '';
      let validators: any = [];

      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.validation?.pattern) {
        validators.push(Validators.pattern(field.validation.pattern));
      }

      if (field.type === 'multiselect') {
        value = [];
      }
      if (field.type === 'checkbox') {
        value = false;
      }
      group[field.name] = [{value, disabled: !!field.disabled}, validators];
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
    this.formData.emit(this.form.value);
  }

  onMultiSelectChange(field: FieldSchema, option: string, event: Event) {
    const formField = this.form.get(field.name);
    const target = event.target as HTMLInputElement;
    const fieldValue: string[] = formField?.value || [];

    if (target.checked) {
      formField?.setValue([...fieldValue, option]);
    } else {
      formField?.setValue(fieldValue.filter((val) => val !== option));
    }
  }

  isFieldInvalid(field: FieldSchema) {
    const formField = this.form.get(field.name);
    return formField?.invalid && (formField?.touched || formField?.dirty);
  }

  getErrorMessage(field: FieldSchema) {
    const formField = this.form.get(field.name);

    if (!formField?.errors) return;

    if (formField?.errors['required']) {
      return `${field.label} is required.`;
    }
    if (formField?.errors['pattern']) {
      return field.validation?.message ?? `${field.label} has invalid value.`;
    }

    return 'Invalid Value';
  }

  resetForm() {
    this.form.reset();
    this.schema.fields.forEach((field) => {
    if (field.type === 'multiselect') {
      this.form.reset({
        [field.name]:[]
      });
    }
    });
    this.formData.emit(null);
  }

}
