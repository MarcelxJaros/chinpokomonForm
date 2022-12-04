import * as Yup from 'yup'
import { IEditForm } from '../Models/IEditForm';
import { IForm } from '../Models/IForm'


const EditSchema = Yup.object().shape<
Record<keyof IEditForm, Yup.AnySchema>>({
  myKey: Yup.string(),
  name: Yup.string(),
  text: Yup.string().required(),
  power: Yup.number().positive().required(),
})


export default EditSchema;