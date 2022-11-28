import * as Yup from 'yup'
import { IForm } from '../Models/IForm'

const FormSchema = Yup.object().shape<
Record<keyof IForm, Yup.AnySchema>>({
  id: Yup.string().uuid().required(),
  name: Yup.string().required("Name is required"),
  age: Yup.number().required("Age is required"),
})

export default FormSchema;