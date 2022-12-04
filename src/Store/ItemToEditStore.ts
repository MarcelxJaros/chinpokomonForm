import { atom } from 'jotai';
import { IEditForm } from '../Models/IEditForm';

const itemToEditStore = atom<IEditForm>({text: "", power: "", name: "", myKey: ""});

export default itemToEditStore;