# PeerIslandsAssignment

This project demonstrates a **Dynamic Form Generator** built with **Angular 19**, capable of rendering form fields based on a configurable JSON schema.
It supports multiple field types, dynamic validation.

## Features

* Dynamic form generation from a JSON schema

* Supports multiple field types: text, textarea, date, dropdown, checkbox, multiselect

* Configurable validation rules (required, pattern etc.)

* Configurable field attributes (readonly, disabled, hidden), placeholders & error messages

* Unit tests for form logic and rendering

## Steps to Run the Application

### 1. Clone the repository

```bash
git clone git@github.com:himanisingh/peer-islands-assignment.git
cd peer-islands-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run start or ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### 4. Generate dynamic form for JSON Schemas

JSON schemas are stored in `schemas/form-schema.ts` file.
* By default the form is rendering for the schema (FORM_SCHEMA)
* Please comment line **16** & uncomment line **17** in file `app.component.ts` to check for other schema EMPLOYEE_FORM_SCHEMA

## Running unit tests

To execute unit tests, use the following command:

```bash
npm run test or ng test
```

## Building

To build the project run:

```bash
ng build
```

This will create the optimized build inside the `dist/` directory.

## JSON Schema Format Explanation

The form is generated based on a configurable JSON schema that defines:

* The title of the form

* An array of fields, each describing how an input should be rendered

### Example Schema

```bash
export const FORM_SCHEMA: FormSchema = {
  title: 'User Registration',
  fields: [
    { label: 'Full Name', name: 'fullName', type: 'text', required: true, placeholder: 'Enter Full Name'},
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      required: true,
      validation: {
        pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
        message: 'Invalid email address',
      },
      placeholder: 'Enter Valid Email'
    },
    { label: 'Date of Birth', name: 'dob', type: 'date' },
    {
      label: 'Gender',
      name: 'gender',
      type: 'dropdown',
      options: ['Male', 'Female', 'Other'],
      required: true
    },
    {
      label: 'Hobbies',
      name: 'hobbies',
      type: 'multiselect',
      options: ['Reading', 'Sports', 'Music', 'Travel'],
    },
    { label: 'Subscribe to newsletter', name: 'subscribe', type: 'checkbox' },
    { label: 'About Yourself', name: 'about', type: 'textarea', placeholder: 'Tell us about yourself...' },
  ],
};
```

### Field Properties

| Property   | Type | Description |
|----------- |------|-------------|
| `label`    | `string` | Display label for the field |
| `name`     | `string` | Unique key for the field |
| `type`     | `string` | Input type (`text`, `textarea`, `date`, `dropdown`, `checkbox`, `multiselect`) |
| `required` | `boolean` | Whether the field is mandatory |
| `placeholder` | `string` | Placeholder text for input fields |
| `validation` | `object` | Validation rules such as pattern, message |
| `options` | `array` | List of options for dropdown fields |
| `readonly`, `disabled`, `hidden` | `boolean` | Field-level attributes |

### Example Output

When the above JSON schema is passed to the Dynamic Form component, it renders a form with the provided field configurations.

-------------------------------------
         User Registration
-------------------------------------
Full Name: [_____________________]
Email: [_________________________]
Gender: [ Male | Female | Other ]
Date of Birth: [ 2025-10-08 ▼ ]
[ ] Subscribe to Newsletter
-------------------------------------
            [ Submit ]
-------------------------------------


If the user leaves a required field empty or enters invalid data, the corresponding error message appears below the field.