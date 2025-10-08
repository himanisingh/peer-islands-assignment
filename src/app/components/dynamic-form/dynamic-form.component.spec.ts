import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FORM_SCHEMA } from '../../schemas/form-schema';
import { FormSchema } from '../../interfaces/dynamic-form.interface';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  let mockSchema: FormSchema = {
    title: 'Form Test',
    fields: [
      {
        label: 'Full Name',
        name: 'fullName',
        type: 'text',
        required: true,
        placeholder: 'Enter Full Name',
      },
      {
        label: 'Email',
        name: 'email',
        type: 'text',
        required: true,
        validation: {
          pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
          message: 'Invalid email address',
        },
        placeholder: 'Enter Valid Email',
      },
    ]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.schema = mockSchema;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form controls based on schema', () => {
    expect(component.form.contains('fullName')).toBeTrue();
    expect(component.form.contains('email')).toBeTrue();
  });

  it('should mark required field invalid when field is empty', () => {
    const field = component.form.get('fullName');
    field?.setValue('');
    component.onSubmit();

    expect(field?.invalid).toBeTrue();
  });

  it('should throw pattern validation error when invalid email is entered', () => {
    const field = component.form.get('email');
    field?.setValue('himani');
    component.onSubmit();

    expect(component.getErrorMessage(component.schema.fields[1])).toBe('Invalid email address');
  });

  it('should emit the form values when valid values are submitted', () => {
    const fullName = component.form.get('fullName');
    const email = component.form.get('email');

    spyOn(component.formData, 'emit');


    fullName?.setValue('Himani Singh');
    email?.setValue('himani@test.com');

    component.onSubmit();

    expect(component.formData.emit).toHaveBeenCalledWith({
      fullName: 'Himani Singh',
      email: 'himani@test.com'
    });
  });

  it('should not emit when form invalid', () => {
    component.form.get('fullName')?.setValue('');

    spyOn(component.formData, 'emit');

    expect(component.formData.emit).not.toHaveBeenCalled();
   
  });
});
