import { useFormik, useFormikContext } from "formik";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FormInitVals } from "../Constants/FormInit";
import TextBox from "../Controls/TextBox";
import { IForm } from "../Models/IForm";
import '../App.css';
import FormSchema from "../Schemas/FormSchema";


export default function ItemForm() {

  const onSubmit = () => {
    console.log("submited!");
  }

  const { values, setValues, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: FormInitVals,
    validationSchema: FormSchema,
    onSubmit,
  });
  console.log(values);
  const clear = () => {
    setValues(FormInitVals)
  }
  return (
    <form onSubmit={handleSubmit} style={{width: 400}}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control id="name" type="text" placeholder="your name" value={values.name} onChange={handleChange} />

        <Form.Label>Age</Form.Label>
        <Form.Control id="age" type="number" placeholder="your age" value={values.age} onChange={handleChange} />
        <Button className="myButton" type="submit" variant="primary" size="lg">Submit</Button>
        <Button className="myButton" type="button" variant="secondary" size="lg" onClick={clear}>Clear</Button>
      </Form.Group>
    </form>
  )
}