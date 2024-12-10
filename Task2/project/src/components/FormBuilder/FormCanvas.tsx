import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useFormStore } from '../../store/formStore';
import { FormComponentRenderer } from './FormComponentRenderer';

export const FormCanvas: React.FC = () => {
  const { currentForm } = useFormStore();
  const { setNodeRef } = useDroppable({
    id: 'form-canvas',
  });

  return (
    <div
      ref={setNodeRef}
      className="flex-1 p-6 bg-gray-50 min-h-screen overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 min-h-[calc(100vh-3rem)]">
        <h1 className="text-2xl font-bold mb-6">{currentForm.title}</h1>
        <SortableContext
          items={currentForm.components.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          {currentForm.components.map((component) => (
            <FormComponentRenderer key={component.id} component={component} />
          ))}
        </SortableContext>
        {currentForm.components.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            Drag and drop components here to build your form
          </div>
        )}
      </div>
    </div>
  );
};