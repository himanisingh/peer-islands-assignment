# PeerIslandsAssignment

This project demonstrates a Dynamic Form Generator built with Angular 19, capable of rendering form fields based on a configurable JSON schema.
It supports multiple field types, dynamic validation.

## Features

Dynamic form generation from a JSON schema

Supports multiple field types: text, textarea, date, dropdown, checkbox

Configurable validation rules (required, pattern, min/max length, etc.)

Conditional visibility and field attributes (readonly, disabled, hidden)

Configuration-driven placeholders and error messages

Unit tests for form logic and rendering

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

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
