type inputType = 'input' | 'textarea';

export interface IInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  as: inputType; //'input' | 'textarea' | elementType
  required?: boolean;
}