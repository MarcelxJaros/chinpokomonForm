import { useField } from "formik";
import { Form } from "react-bootstrap";
import { StringLiteralType } from "typescript";
import { IForm } from "../Models/IForm"
interface IFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput = (props: IFormProps) => {
  const { label, ...inputProps } = props;
  // useField is a custom React hook that will automagically help you hook up inputs to Formik.
  const [field, meta, helpers] = useField(props);
  // console.log(field);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <br />
      <Form.Control {...field} {...inputProps} className={meta.touched && meta.error ? "input-error" : ""} />
      {(meta.error && meta.touched) ? <p className="error">{meta.error}</p> : <p className="filler" />}
        
    </>
  )
}
export default CustomInput