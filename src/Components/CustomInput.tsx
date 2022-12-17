import { useField } from "formik";
import { Form } from "react-bootstrap";
import { IInputProps } from "../Models/IInputProps";

const CustomInput = (props: IInputProps) => {
  const { label, required, ...inputProps } = props;
  // useField is a custom React hook that will automagically help you hook up inputs to Formik.
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <Form.Label>{label}</Form.Label> {required ? <span className="redStar">*</span> : null}
      <br />
      <Form.Control {...field} {...inputProps} className={meta.touched && meta.error ? "input-error" : ""} />
      {/* class filler is just invisible element that prevents textboxes to pup up and down whenever error message is displayed */}
      {(meta.error && meta.touched) ? <p className="error">{meta.error}</p> : <p className="filler" />}   
    </>
  )
};

// most input boxes are type text, so in IInputProps are these parameters defined as optional and default values are initialized here
// if you need other values, specify while passing props to component e.g. ... as="textarea" rows={7} or type="number"
CustomInput.defaultProps = { as: 'input', type: 'text', required: true};

export default CustomInput;