import * as Yup from 'yup'
import { IForm } from '../Models/IForm'

const FormSchema = Yup.object().shape<
Record<keyof IForm, Yup.AnySchema>>({
  id: Yup.string().uuid().required(),
  name: Yup.string().min(5).required("Name is required"),
  age: Yup.number().positive().required("Age is required"),
  image: Yup.string().min(10).required()
})

export default FormSchema;