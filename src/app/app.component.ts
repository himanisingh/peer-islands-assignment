import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { EMPLOYEE_FORM_SCHEMA, FORM_SCHEMA } from './schemas/form-schema';
import { FormSchema } from './interfaces/dynamic-form.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicFormComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'peer-islands-assignment';
 // formSchema: FormSchema = FORM_SCHEMA;
  formSchema: FormSchema = EMPLOYEE_FORM_SCHEMA;
  formValue: any;

  onSubmit(value: any) {
      this.formValue = value;
      console.log('Form submitted', value);
  }
}
