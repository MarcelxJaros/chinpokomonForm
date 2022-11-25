import { v4 as uuidv4 } from 'uuid';
import { IForm } from '../Models/IForm';

export const FormInitVals: IForm = {
  id: uuidv4(),
  name: "",
  age: 0,
}