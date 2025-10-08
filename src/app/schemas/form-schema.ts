import { FormSchema } from "../interfaces/dynamic-form.interface";

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


export const EMPLOYEE_FORM_SCHEMA: FormSchema = {
  title: 'Employee Information',
  fields: [
    { 
      label: 'Employee Name', 
      name: 'employeeName', 
      type: 'text', 
      required: true, 
      placeholder: 'Enter Employee Name' 
    },
    {
      label: 'Work Email',
      name: 'workEmail',
      type: 'text',
      required: true,
      validation: {
        pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
        message: 'Invalid work email address',
      },
      placeholder: 'Enter Work Email Address',
      disabled: true
    },
    { 
      label: 'Date of Joining', 
      name: 'doj', 
      type: 'date' 
    },
    {
      label: 'Department',
      name: 'department',
      type: 'dropdown',
      options: ['Engineering', 'HR', 'Sales', 'Marketing'],
      required: true
    },
    {
      label: 'Skills',
      name: 'skills',
      type: 'multiselect',
      options: ['Angular', 'React', 'Node.js', 'Python', 'Java'],
    },
    { 
      label: 'Full-time Employee', 
      name: 'isFullTime', 
      type: 'checkbox' 
    },
    { 
      label: 'Additional Notes', 
      name: 'notes', 
      type: 'textarea', 
      placeholder: 'Add any extra information...' 
    },
  ],
};
