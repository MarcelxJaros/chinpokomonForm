import { useFormik, useFormikContext } from "formik";
import { useCallback, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FormInitVals } from "../Constants/FormInit";
import TextBox from "../Controls/TextBox";
import { IForm } from "../Models/IForm";
import '../App.css';
import FormSchema from "../Schemas/FormSchema";


export default function ItemForm() {

  const onSubmit = async (values: IForm, actions: { resetForm: () => void; }) => {
    console.log(values);
    console.log(actions);
    await new Promise(resolve => setTimeout(resolve, 1000))
    actions.resetForm();
  }

  const { values, setValues, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: FormInitVals,
    validationSchema: FormSchema,
    onSubmit,
  });

  // console.log(values);
  // console.log(errors);

  const clear = useCallback(() => {
    setValues(FormInitVals)
  }, [values])

  return (
    <form onSubmit={handleSubmit} style={{ width: 400 }}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
          type="text"
          placeholder="your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {(errors.name && touched.name) ? <p className="error">{errors.name}</p> : <p className="filler"> </p>}
        <Form.Label>Age</Form.Label>
        <Form.Control
          id="age"
          type="number"
          placeholder="your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {(errors.age && touched.age) ? <p className="error">{errors.age}</p> : <p className="filler"> </p>}
        <Button className="myButton" type="submit" variant="primary" size="lg">Submit</Button>
        <Button className="myButton" type="button" variant="secondary" size="lg" onClick={clear}>Clear</Button>
      </Form.Group>
    </form>
  )
}