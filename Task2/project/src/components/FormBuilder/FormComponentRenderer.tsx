import React, { memo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FormComponent } from '../../types/form';
import { Grip, X, Settings } from 'lucide-react';
import { useFormStore } from '../../store/formStore';
import { FormField } from './components/FormField';

interface Props {
  component: FormComponent;
}

export const FormComponentRenderer: React.FC<Props> = memo(({ component }) => {
  const { previewMode, removeComponent } = useFormStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative p-6 mb-4 bg-white rounded-lg border ${
        previewMode ? '' : 'border-gray-200 hover:border-gray-300'
      } transition-colors duration-200`}
    >
      {!previewMode && (
        <div className="absolute right-2 top-2 flex gap-2">
          <button
            {...attributes}
            {...listeners}
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors duration-200"
            title="Drag to reorder"
          >
            <Grip className="w-4 h-4 text-gray-400" />
          </button>
          <button
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors duration-200"
            title="Component settings"
          >
            <Settings className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => removeComponent(component.id)}
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors duration-200"
            title="Remove component"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {component.label}
          {component.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {component.placeholder && (
          <span className="text-xs text-gray-500 mt-1">{component.placeholder}</span>
        )}
      </div>
      <FormField component={component} />
    </div>
  );
});