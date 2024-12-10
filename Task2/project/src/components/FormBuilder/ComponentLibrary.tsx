import React from 'react';
import { Type, FileText, ListOrdered, CheckSquare, ToggleLeft } from 'lucide-react';
import { DraggableComponent } from './components/DraggableComponent';
import { ComponentOption } from './types';

const components: ComponentOption[] = [
  { type: 'text', label: 'Text Input', icon: <Type className="w-5 h-5" /> },
  { type: 'textarea', label: 'Text Area', icon: <FileText className="w-5 h-5" /> },
  { type: 'select', label: 'Dropdown', icon: <ListOrdered className="w-5 h-5" /> },
  { type: 'checkbox', label: 'Checkbox', icon: <CheckSquare className="w-5 h-5" /> },
  { type: 'radio', label: 'Radio Group', icon: <ToggleLeft className="w-5 h-5" /> },
];

export const ComponentLibrary: React.FC = () => {
  return (
    <div className="w-72 bg-gray-50 p-6 border-r border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6 text-gray-900">Components</h2>
      <div className="space-y-3">
        {components.map((component) => (
          <DraggableComponent key={component.type} {...component} />
        ))}
      </div>
    </div>
  );
};