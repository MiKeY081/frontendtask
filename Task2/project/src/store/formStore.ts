import { create } from 'zustand';
import { FormComponent, FormSchema } from '../types/form';

interface FormStore {
  currentForm: FormSchema;
  previewMode: boolean;
  setPreviewMode: (mode: boolean) => void;
  addComponent: (component: FormComponent) => void;
  removeComponent: (id: string) => void;
  updateComponent: (id: string, component: Partial<FormComponent>) => void;
  reorderComponents: (startIndex: number, endIndex: number) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  currentForm: {
    id: '1',
    title: 'New Form',
    components: [],
  },
  previewMode: false,
  setPreviewMode: (mode) => set({ previewMode: mode }),
  addComponent: (component) =>
    set((state) => ({
      currentForm: {
        ...state.currentForm,
        components: [...state.currentForm.components, component],
      },
    })),
  removeComponent: (id) =>
    set((state) => ({
      currentForm: {
        ...state.currentForm,
        components: state.currentForm.components.filter((c) => c.id !== id),
      },
    })),
  updateComponent: (id, component) =>
    set((state) => ({
      currentForm: {
        ...state.currentForm,
        components: state.currentForm.components.map((c) =>
          c.id === id ? { ...c, ...component } : c
        ),
      },
    })),
  reorderComponents: (startIndex, endIndex) =>
    set((state) => {
      const components = [...state.currentForm.components];
      const [removed] = components.splice(startIndex, 1);
      components.splice(endIndex, 0, removed);
      return {
        currentForm: {
          ...state.currentForm,
          components,
        },
      };
    }),
}));