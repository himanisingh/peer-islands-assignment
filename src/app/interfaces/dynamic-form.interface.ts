export type FieldType = 'text' | 'date' | 'dropdown' | 'multiselect' | 'checkbox' | 'textarea';

export interface Validation {
    pattern: string;
    message: string;
}

export interface FieldSchema {
    label: string;
    name: string;
    type: FieldType;
    required?: boolean;
    validation? : Validation;
    options? : string[];
    placeholder?: string;
    disabled?: boolean;
    hidden?: boolean;
}

export interface FormSchema {
    title: string;
    fields: FieldSchema[];
}