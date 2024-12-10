import { FormComponentType } from '../../types/form';

export interface ComponentOption {
  type: FormComponentType;
  label: string;
  icon: React.ReactNode;
}