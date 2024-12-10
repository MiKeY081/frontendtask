import React from 'react';
import { FormComponent } from '../../../types/form';

interface FormFieldProps {
  component: FormComponent;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ component, className = '' }) => {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " + className;

  switch (component.type) {
    case 'text':
      return (
        <input
          type="text"
          placeholder={component.placeholder}
          className={baseClassName}
        />
      );
    case 'textarea':
      return (
        <textarea
          placeholder={component.placeholder}
          className={baseClassName}
          rows={4}
        />
      );
    case 'select':
      return (
        <select className={baseClassName}>
          <option value="">Select an option</option>
          {component.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    case 'checkbox':
      return (
        <div className="space-y-2">
          {component.options?.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      );
    case 'radio':
      return (
        <div className="space-y-2">
          {component.options?.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input type="radio" name={component.id} className="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      );
    default:
      return null;
  }
};