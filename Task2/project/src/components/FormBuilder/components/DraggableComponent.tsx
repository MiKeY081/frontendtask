import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { ComponentOption } from '../types';

export const DraggableComponent: React.FC<ComponentOption> = ({ type, label, icon }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${type}-draggable`,
    data: { type },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="flex items-center gap-2 p-3 mb-2 bg-white rounded-lg shadow-sm cursor-move hover:bg-gray-50 border border-gray-200 transition-colors duration-200"
    >
      {icon}
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
};