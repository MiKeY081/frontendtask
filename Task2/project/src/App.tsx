import React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { ComponentLibrary } from './components/FormBuilder/ComponentLibrary';
import { FormCanvas } from './components/FormBuilder/FormCanvas';
import { FormHeader } from './components/FormBuilder/components/FormHeader';
import { useFormStore } from './store/formStore';
import { FormComponent } from './types/form';

function App() {
  const { addComponent, previewMode } = useFormStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) return;

    if (active.data.current?.type) {
      const newComponent: FormComponent = {
        id: crypto.randomUUID(),
        type: active.data.current.type,
        label: `New ${active.data.current.type} field`,
        required: false,
        placeholder: `Enter ${active.data.current.type}...`,
        options: ['Option 1', 'Option 2', 'Option 3'],
      };
      addComponent(newComponent);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gray-100">
        <FormHeader />
        <main className="flex">
          {!previewMode && <ComponentLibrary />}
          <FormCanvas />
        </main>
      </div>
    </DndContext>
  );
}

export default App;