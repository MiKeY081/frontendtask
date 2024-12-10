import { z } from 'zod';

export type FormComponentType = 'text' | 'textarea' | 'select' | 'radio' | 'checkbox';

export interface FormComponent {
  id: string;
  type: FormComponentType;
  label: string;
  required: boolean;
  options?: string[];
  placeholder?: string;
  validation?: z.ZodType<any>;
}

export interface FormSchema {
  id: string;
  title: string;
  components: FormComponent[];
}